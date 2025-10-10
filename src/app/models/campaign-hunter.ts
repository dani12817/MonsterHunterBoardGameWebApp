import { DocumentReference } from "firebase/firestore";

import { BaseFirebase, Campaign } from ".";

import { WeaponType } from "../shared/enums";

interface BaseCampaignHunter extends BaseFirebase {
    weaponType: WeaponType;
    weaponEquipped?: number;
    armourHeadEquipped?: number;
    armourChestEquipped?: number;
    armourLegEquipped?: number;
    weapons?: number[];
    armoursHead?: number[];
    armoursChest?: number[];
    armoursLeg?: number[];
}

export interface CampaignHunter extends BaseCampaignHunter {
    campaign?: DocumentReference<Campaign, Campaign>;
}

export interface CampaignHunterDto extends BaseCampaignHunter {
    campaign?: string;
}