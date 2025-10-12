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

export const  BaseCampaignHunterKeys = {
    weaponEquipped: "weaponEquipped",
    armourHeadEquipped: "armourHeadEquipped",
    armourChestEquipped: "armourChestEquipped",
    armourLegEquipped: "armourChestEquipped",
    weapons: "weapons",
    armoursHead: "armoursHead",
    armoursChest: "armoursChest",
    armoursLeg: "armoursLeg",
};

export type BaseCampaignHunterKeys = typeof BaseCampaignHunterKeys[keyof typeof BaseCampaignHunterKeys];
