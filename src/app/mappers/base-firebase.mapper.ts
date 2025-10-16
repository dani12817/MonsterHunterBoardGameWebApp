import { Firestore } from "@angular/fire/firestore";
import { inject } from "@angular/core";
import { collection, CollectionReference, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseMapper } from "./local/base.mapper";
import { BaseFirebase } from "../models";

export abstract class BaseFirebaseMapper<E extends BaseFirebase, D>
    extends BaseMapper<E,D> {

    public abstract documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : E;

}