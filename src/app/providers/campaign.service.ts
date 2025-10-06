import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase } from ".";
import { CampaignMapper } from "../mappers";
import { Campaign, CampaignDto } from "../models";

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends BaseServiceFirebase<Campaign, CampaignDto> {

    constructor() {
        super(inject(CampaignMapper), "campaign");
    }

}