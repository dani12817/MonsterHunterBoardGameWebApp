import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase } from ".";
import { CampaignQuestsMapper } from "../mappers";
import { CampaignQuests, CampaignQuestsDto } from "../models";

import { CAMPAIGN_QUESTS_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignQuestsService extends BaseServiceFirebase<CampaignQuests, CampaignQuestsDto> {

    constructor() {
        super(inject(CampaignQuestsMapper), CAMPAIGN_QUESTS_FIREBASE);
    }

}