import { inject, Injectable } from "@angular/core";
import { collection, CollectionReference, doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Firestore } from "@angular/fire/firestore";

import { BaseFirebaseMapper } from ".";
import { Campaign, CampaignDto } from "../models";

import { USER_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMapper extends BaseFirebaseMapper<Campaign, CampaignDto> {

    protected _userReference: CollectionReference;

    constructor() {
        super();
        this._userReference = collection(inject(Firestore), USER_FIREBASE)
    }

    public dtoToModel( dto: CampaignDto ) : Campaign {
        return {
            ...dto,
            admin: doc(this._userReference, dto.admin)
        };
    }

    public modelToDto( model: Campaign ) : CampaignDto {
        return {
            ...model,
            admin: model.admin?.id
        };
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<Campaign, Campaign>) : Campaign {
        return {
          ...documentData.data(),
          id: documentData.id,
          createdOn: documentData.data()["createdOn"].toDate()
        };
    }

}