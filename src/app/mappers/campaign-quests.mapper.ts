import { Injectable } from "@angular/core";
import { doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseFirebaseMapper } from ".";
import { CampaignQuests, CampaignQuestsDto } from "../models";

import { CAMPAIGN_QUESTS_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignQuestsMapper extends BaseFirebaseMapper<CampaignQuests, CampaignQuestsDto> {

    constructor() {
        super(CAMPAIGN_QUESTS_FIREBASE);
    }

    public dtoToModel( dto: CampaignQuestsDto ) : CampaignQuests {
        return {
            ...dto,
            campaign: doc(this._collectionReference, dto.campaign)
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