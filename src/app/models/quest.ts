import { BaseModel } from "./base";

export interface Quest extends BaseModel {
    quests?: QuestMission[];
}

export interface QuestMission {
    difficulty?: number;
    remaining?: number;
}

export interface QuestDto extends Quest {
    icon?: string;
}