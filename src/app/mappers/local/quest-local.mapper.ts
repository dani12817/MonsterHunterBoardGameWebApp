import { Injectable } from "@angular/core";

import { BaseMapper } from "..";
import { QuestLocal, QuestLocalDto, QuestMission, QuestMissionDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";

@Injectable({
  providedIn: 'root'
})
export class QuestLocalMapper extends BaseMapper<QuestLocal, QuestLocalDto> {

    public dtoToModel(dto: QuestLocalDto) : QuestLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: QuestLocal) : QuestLocalDto {
        return {
            id: model.id,
            name: CommonMethods.generateMonsterName(model.name!),
            icon: CommonMethods.generateMonsterIcon(model.name!),
            quests: this._mapQuests(model.quests)
        };
    }

    private _mapQuests(quests: QuestMission[]): QuestMissionDto[] {
        let questStrings: QuestMissionDto[] = [];

        for (const quest of quests) {
            questStrings.push({
                name: `stars${quest.stars}`,
                icon: CommonMethods.generateQuestIcon(`stars${quest.stars}`)
            });
        }

        return questStrings;
    }

}