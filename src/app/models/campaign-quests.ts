import { DocumentReference } from "firebase/firestore";

import { BaseFirebase, Campaign } from ".";

interface BaseCampaignQuests extends BaseFirebase {
    quests?: any[];
}

export interface CampaignQuests extends BaseCampaignQuests {
    id?: string;
    campaign?: DocumentReference<Campaign, Campaign>;
}

export interface CampaignQuestsDto extends BaseCampaignQuests {
    campaign?: string;
}