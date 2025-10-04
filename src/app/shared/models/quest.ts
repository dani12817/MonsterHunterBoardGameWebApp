import { BaseEntity } from "./base";

export interface Quest extends BaseEntity {
    quests?: QuestMission[];
}

export interface QuestMission {
    difficulty?: number;
    remaining?: number;
}

export interface QuestDto extends Quest {
    icon?: string;
}