import { inject, Injectable } from "@angular/core";
import { CollectionReference, Firestore } from "@angular/fire/firestore";

import { BaseFirebase } from "../models";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { BaseMapper } from "../mappers/base.mapper";

export abstract class BaseService<E extends BaseFirebase, D extends BaseFirebase> {
  protected _firestore = inject(Firestore);
  protected _collectionReference: CollectionReference;
  protected _collectionName: string;

  protected _baseMapper: BaseMapper<E, D>;

  constructor(baseMapper: BaseMapper<E, D>, collectionName: string) {
    this._baseMapper = baseMapper;
    this._collectionName = collectionName;
    this._collectionReference = collection(this._firestore, this._collectionName)
  }

  protected async save(dto: D): Promise<E> {
    let model: E = this._baseMapper.dtoToModel(dto);
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

  protected async _create(model: E) {
    return addDoc(this._collectionReference, model);
  }

  protected getById(id: string) {
    return new Promise<E | undefined>(async (resolve, reject) => {
      const userSnap = await getDoc(doc(this._firestore, this._collectionName, id));

      if(userSnap.exists()) {
        resolve(this._baseMapper.documentDataToModel(userSnap));
      }

      resolve(undefined);
    });
  }

}