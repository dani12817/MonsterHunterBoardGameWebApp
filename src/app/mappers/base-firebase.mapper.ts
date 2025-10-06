import { Firestore } from "@angular/fire/firestore";
import { inject } from "@angular/core";
import { collection, CollectionReference, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseMapper } from "./base.mapper";
import { BaseFirebase } from "../models";

export abstract class BaseFirebaseMapper<E extends BaseFirebase, D>
    extends BaseMapper<E,D> {

    protected _collectionReference: CollectionReference;

    constructor(collectionName: string) {
        super();
        this._collectionReference = collection(inject(Firestore), collectionName)
    }

    public abstract documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : E;

}