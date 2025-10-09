import { DocumentReference } from "firebase/firestore";

import { BaseFirebase, UserDetail } from "./";

export interface BaseCampaign extends BaseFirebase {
    days?: number;
    quests?: any[];
    materials?: number[];
    sharedStorage?: boolean;
    createdOn?: any;
}

export interface Campaign extends BaseCampaign {
    admin?: DocumentReference<UserDetail, UserDetail>;
}

export interface CampaignDto extends BaseCampaign {
    admin?: string;
}