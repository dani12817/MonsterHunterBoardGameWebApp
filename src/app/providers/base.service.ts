import { inject, Injectable } from "@angular/core";
import { CollectionReference, Firestore } from "@angular/fire/firestore";

import { BaseFirebase } from "../models";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { BaseMapper } from "../mappers/base.mapper";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<E extends BaseFirebase, D extends BaseFirebase> {
  private _firestore = inject(Firestore);
  private _collectionReference: CollectionReference;

  //private _baseMapper = inject(BaseMapper<E, D>);

  protected abstract _baseMapper() : BaseMapper<E, D>;

  constructor() {
    this._collectionReference = collection(this._firestore, this.getCollectionName())
  }

  protected abstract getCollectionName() : string;

  async save(dto: D): Promise<E> {
    let model: E = this._baseMapper().dtoToModel(dto);
    if (model.id != undefined) {
        setDoc(doc(this._firestore, this.getCollectionName(), model.id), model);
        return model;
    }
    let newElement = await this._create(model);
    return {
        ...model,
        id: newElement.id
    };
  }

  private async _create(model: E) {
    return addDoc(this._collectionReference, model);
  }
  
  getById(id: string) {
    return new Promise<E | undefined>(async (resolve, reject) => {
      const userSnap = await getDoc(doc(this._firestore, this.getCollectionName(), id));

      if(userSnap.exists()) {
        resolve(this._baseMapper().documentDataToModel(userSnap));
      }

      resolve(undefined);
    });
  }

}