import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase } from ".";
import { CampaignQuestsMapper } from "../mappers";
import { CampaignQuests, CampaignQuestsDto } from "../models";

import { CAMPAIGN_FIREBASE, CAMPAIGN_QUESTS_FIREBASE } from "../shared/constants";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CampaignQuestsService extends BaseServiceFirebase<CampaignQuests, CampaignQuestsDto> {

    constructor() {
        super(inject(CampaignQuestsMapper), CAMPAIGN_QUESTS_FIREBASE);
    }
    
    getDtoByCampaignId(campaignId: string) {
      return new Promise<CampaignQuestsDto | undefined>(async (resolve, reject) => {
        const questsSnap = await getDocs(query(this._collectionReference, 
          where("campaign", "==", doc(collection(this._firestore, CAMPAIGN_FIREBASE), campaignId))));

        if(!questsSnap.empty) {
          let questModel: CampaignQuests;

          questsSnap.forEach((quest) => {
            questModel = this._baseMapper.documentDataToModel(quest);
          });

          resolve(this._baseMapper.modelToDto(questModel!));
        }
  
        resolve(undefined);
      });
    }

}