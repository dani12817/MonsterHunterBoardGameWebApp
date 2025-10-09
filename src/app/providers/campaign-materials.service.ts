import { inject, Injectable } from "@angular/core";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

import { BaseServiceFirebase } from ".";
import { CampaignMaterialsMapper } from "../mappers";
import { CampaignMaterials, CampaignMaterialsDto } from "../models";

import { CAMPAIGN_FIREBASE, CAMPAIGN_MATERIALS_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMaterialsService extends BaseServiceFirebase<CampaignMaterials, CampaignMaterialsDto> {

    constructor() {
        super(inject(CampaignMaterialsMapper), CAMPAIGN_MATERIALS_FIREBASE);
    }

    getDtoByCampaignId(campaignId: string) {
      return new Promise<CampaignMaterialsDto | undefined>(async (resolve, reject) => {
        const materialsSnap = await getDocs(query(this._collectionReference, 
          where("campaign", "==", doc(collection(this._firestore, CAMPAIGN_FIREBASE), campaignId))));

        if(!materialsSnap.empty) {
          let materialModel: CampaignMaterials;

          materialsSnap.forEach((material) => {
            materialModel = this._baseMapper.documentDataToModel(material);
          });

          resolve(this._baseMapper.modelToDto(materialModel!));
        }
  
        resolve(undefined);
      });
    }

}