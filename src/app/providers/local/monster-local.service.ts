import { inject, Injectable } from "@angular/core";

import { BaseLocalService } from "..";
import { MonsterLocalMapper } from "../../mappers";
import { MonsterLocal, MonsterLocalDto } from "../../models";

import { MONSTER_TABLE } from "../../../db";

@Injectable({
  providedIn: 'root'
})
export class MonsterLocalService extends BaseLocalService<MonsterLocal, MonsterLocalDto> {

  constructor() {
    super(inject(MonsterLocalMapper), MONSTER_TABLE);
  }

}