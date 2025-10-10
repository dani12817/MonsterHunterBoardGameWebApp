import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase } from ".";
import { CampaignHunterMapper } from "../mappers";
import { CampaignHunter, CampaignHunterDto } from "../models";

import { CAMPAIGN_FIREBASE, CAMPAIGN_HUNTERS_FIREBASE } from "../shared/constants";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CampaignHunterService extends BaseServiceFirebase<CampaignHunter, CampaignHunterDto> {

    constructor() {
        super(inject(CampaignHunterMapper), CAMPAIGN_HUNTERS_FIREBASE);
    }
    
    getAllDtoByCampaignId(campaignId: string) {
      return new Promise<CampaignHunterDto[]>(async (resolve, reject) => {
        const huntersSnap = await getDocs(query(this._collectionReference, 
          where("campaign", "==", doc(collection(this._firestore, CAMPAIGN_FIREBASE), campaignId))));
          
        let hunterList: CampaignHunterDto[] = [];

        huntersSnap.forEach((hunter) => {
          hunterList.push(this._baseMapper.modelToDto(this._baseMapper.documentDataToModel(hunter)));
        });
  
        resolve(hunterList);
      });
    }

}