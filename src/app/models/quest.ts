import { BaseLocal } from "./";

export interface Quest extends BaseLocal {
    quests?: QuestMission[];
}

export interface QuestMission {
    difficulty?: number;
    remaining?: number;
}

export interface QuestDto extends Quest {
    icon?: string;
}