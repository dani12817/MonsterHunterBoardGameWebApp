import { inject } from "@angular/core";
import { CollectionReference, Firestore } from "@angular/fire/firestore";
import { addDoc, collection, doc, getDoc, getDocs, query, QueryConstraint, setDoc } from "firebase/firestore";

import { BaseFirebaseMapper } from "../mappers";
import { BaseFirebase } from "../models";

export abstract class BaseServiceFirebase<E extends BaseFirebase, D> {
  protected _firestore = inject(Firestore);
  protected _collectionReference: CollectionReference;
  protected _collectionName: string;

  protected _baseMapper: BaseFirebaseMapper<E, D>;

  constructor(baseMapper: BaseFirebaseMapper<E, D>, collectionName: string) {
    this._baseMapper = baseMapper;
    this._collectionName = collectionName;
    this._collectionReference = collection(this._firestore, this._collectionName)
  }
    
  getAll(queryConstraints: QueryConstraint[] = []): Promise<E[]> {
    return new Promise<E[]>(async (resolve, reject) => {
      const docSnapList = await getDocs(query(this._collectionReference, ...queryConstraints));

      let modelList: E[] = [];

      docSnapList.forEach(docSnap => {
        modelList.push(this._baseMapper.documentDataToModel(docSnap));
      });

      resolve(modelList);
    });
  }

  async getAllDto(): Promise<D[]> {
    let modelList: E[] = await this.getAll();
    return this._baseMapper.modelToDtoList(modelList);
  }

  async save(dto: D): Promise<E> {
    let model: E = this._baseMapper.dtoToModel(dto);
    console.log("save", model);
    if (model.id != undefined) {
      setDoc(doc(this._firestore, this._collectionName, model.id), model);
      return model;
    }
    let newElement = await this._create(model);
    return {
      ...model,
      id: newElement.id
    };
  }

  async saveAll(dtoList: D[]): Promise<E[]> {
    let modelList: E[] = [];

    for (const dto of dtoList) {
      modelList.push(await this.save(dto));
    }

    return modelList;
  }

  async saveDto(dto: D): Promise<D> {
    return this._baseMapper.modelToDto(await this.save(dto));
  }

  protected async _create(model: E) {
    return addDoc(this._collectionReference, model);
  }

  getById(id: string): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      const userSnap = await getDoc(doc(this._firestore, this._collectionName, id));

      if(userSnap.exists()) {
        resolve(this._baseMapper.documentDataToModel(userSnap));
      }

      reject(undefined);
    });
  }

  async getDtoById(id: string): Promise<D> {
    let model: E = await this.getById(id);
    return this._baseMapper.modelToDto(model);
  }

}