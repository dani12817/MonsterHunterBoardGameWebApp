import { inject, Injectable } from "@angular/core";
import { collection, CollectionReference, doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Firestore } from "@angular/fire/firestore";

import { BaseFirebaseMapper } from ".";
import { CampaignQuests, CampaignQuestsDto } from "../models";

import { CAMPAIGN_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignQuestsMapper extends BaseFirebaseMapper<CampaignQuests, CampaignQuestsDto> {

    protected _campaignReference: CollectionReference;

    constructor() {
        super();
        this._campaignReference = collection(inject(Firestore), CAMPAIGN_FIREBASE)
    }

    public dtoToModel( dto: CampaignQuestsDto ) : CampaignQuests {
        return {
            ...dto,
            campaign: doc(this._campaignReference, dto.campaign)
        };
    }

    public modelToDto( model: CampaignQuests ) : CampaignQuestsDto {
        return {
            ...model,
            campaign: model.campaign?.id
        };
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : CampaignQuests {
        return {
            ...documentData.data(),
            id: documentData.id,
        };
    }

}