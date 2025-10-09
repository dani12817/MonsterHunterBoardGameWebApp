import { inject, Injectable } from "@angular/core";

import { BaseLocalService } from ".";
import { QuestLocalMapper } from "../mappers";
import { QuestLocal, QuestLocalDto } from "../models";

import { QUEST_TABLE } from "../../db";

@Injectable({
  providedIn: 'root'
})
export class QuestsLocalService extends BaseLocalService<QuestLocal, QuestLocalDto> {

    constructor() {
        super(inject(QuestLocalMapper), QUEST_TABLE);
    }

}