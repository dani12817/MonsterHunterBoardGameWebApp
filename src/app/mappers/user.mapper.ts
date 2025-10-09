import { Injectable } from "@angular/core";
import { UserCredential } from "firebase/auth";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseFirebaseMapper } from "./";
import { UserDetail } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserMapper extends BaseFirebaseMapper<UserDetail, UserCredential> {

    public dtoToModel( dto: UserCredential ) : UserDetail {
        return {
            id: dto.user.uid,
            name: dto.user.displayName!,
            username: dto.user.email?.split('@', 1)[0],
            email: dto.user.email!,
            //avatar: "/assets/img/no_avatar.webp",
        };
    }

    public modelToDto( model: UserDetail ) : UserCredential {
        throw new Error("not Implemented")
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : UserDetail {
        return {
          ...documentData.data(),
          id: documentData.id,
        };
    }

}