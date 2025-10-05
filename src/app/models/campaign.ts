import { BaseFirebase } from "./base";

export interface Campaign extends BaseFirebase {
    user?: number;
    days?: number;
    quests?: number[];
    materials?: number[];
}