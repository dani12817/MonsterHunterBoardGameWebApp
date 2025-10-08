import { DocumentReference } from "firebase/firestore";

import { BaseFirebase, Campaign } from ".";

interface BaseCampaignMaterials extends BaseFirebase {
    materials?: number[];
}

export interface CampaignMaterials extends BaseCampaignMaterials {
    campaign?: DocumentReference<Campaign, Campaign>;
}

export interface CampaignMaterialsDto extends BaseCampaignMaterials {
    campaign?: string;
}