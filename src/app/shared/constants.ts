import { ArmourTypeItemList, BaseCampaignHunterKeys } from "../models";
import { ArmourType } from "./enums";

export const CAMPAIGN_FIREBASE = "campaign";
export const CAMPAIGN_QUESTS_FIREBASE = "campaignQuests";
export const CAMPAIGN_MATERIALS_FIREBASE = "campaignMaterials";
export const CAMPAIGN_HUNTERS_FIREBASE = "campaignHunters";
export const USER_FIREBASE = 'user';

export const DEFAULT_DAYS = 30;

export const QUEST_PER_MISSION = 3;
export const MAX_QUEST_MISSIONS = 3;

export const ASSETS_FOLDER = "/assets/img";
export const ASSETS_MONSTER_FOLDER = "/monster";
export const ASSETS_MATERIAL_FOLDER = "/material";
export const ASSETS_WEAPON_FOLDER = "/weapon";
export const ASSETS_ARMOUR_FOLDER = "/armour";
export const ASSETS_ICON_FOLDER = "/icon";

export const MAX_HUNTERS_PER_CAMPAIGN = 4;

export const ARMOUR_TYPE_LIST: ArmourTypeItemList[] = [
    { 
        key: ArmourType.helm, 
        equippedKey: BaseCampaignHunterKeys.armourHelmEquipped,
        listKey: BaseCampaignHunterKeys.armoursHelm
    },
    {
        key: ArmourType.chest,
        equippedKey: BaseCampaignHunterKeys.armourChestEquipped, 
        listKey: BaseCampaignHunterKeys.armoursChest
    },
    {
        key: ArmourType.leg,
        equippedKey: BaseCampaignHunterKeys.armourLegEquipped,
        listKey: BaseCampaignHunterKeys.armoursLeg
    }
];