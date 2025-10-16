import { BaseLocal } from "..";

export interface QuestLocal extends BaseLocal {
    quests: QuestMission[];
}

export interface QuestMission {
    stars: number;
    //remaining?: number;
}

export interface QuestLocalDto extends BaseLocal {
    icon?: string;
    quests: QuestMissionDto[];
}

export interface QuestMissionDto {
    name: string;
    icon: string;
}