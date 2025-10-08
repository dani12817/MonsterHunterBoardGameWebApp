import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase } from ".";
import { CampaignMaterialsMapper } from "../mappers";
import { CampaignMaterials, CampaignMaterialsDto } from "../models";

import { CAMPAIGN_MATERIALS_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMaterialsService extends BaseServiceFirebase<CampaignMaterials, CampaignMaterialsDto> {

    constructor() {
        super(inject(CampaignMaterialsMapper), CAMPAIGN_MATERIALS_FIREBASE);
    }

}