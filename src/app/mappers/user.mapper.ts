import { Injectable } from "@angular/core";
import { UserCredential } from "firebase/auth";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseMapper } from "./base.mapper";

import { UserDetail } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserMapper extends BaseMapper<UserDetail, UserDetail> {

    public dtoToModel( dto: UserDetail ) : UserDetail {
        return dto;
    }

    public modelToDto( model: UserDetail ) : UserDetail {
        return model;
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : UserDetail {
        return {
          ...documentData.data(),
          id: documentData.id,
        };
    }

}