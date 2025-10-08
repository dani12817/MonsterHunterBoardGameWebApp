import { Injectable } from "@angular/core";
import { doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseFirebaseMapper } from ".";
import { Campaign, CampaignDto } from "../models";

import { CAMPAIGN_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMapper extends BaseFirebaseMapper<Campaign, CampaignDto> {

    constructor() {
        super(CAMPAIGN_FIREBASE);
    }

    public dtoToModel( dto: CampaignDto ) : Campaign {
        return {
            ...dto,
            admin: doc(this._collectionReference, dto.admin)
        };
    }

    public modelToDto( model: Campaign ) : CampaignDto {
        return {
            ...model,
            admin: model.admin?.id
        };
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : Campaign {
        return {
          ...documentData.data(),
          id: documentData.id,
          createdOn: documentData.data()["createdOn"].toDate()
        };
    }

}