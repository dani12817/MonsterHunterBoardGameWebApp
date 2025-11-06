import { DocumentReference } from "firebase/firestore";

import { BaseFirebase, UserDetail } from "./";

export interface BaseCampaign extends BaseFirebase {
    //quests?: any[];
    //materials?: number[];
    sharedStorage?: boolean;
    createdOn?: any;
}

export interface Campaign extends BaseCampaign {
    days?: number;
    admin?: DocumentReference<UserDetail, UserDetail>;
}

export interface CampaignDto extends BaseCampaign {
    days: number;
    admin?: string;
}