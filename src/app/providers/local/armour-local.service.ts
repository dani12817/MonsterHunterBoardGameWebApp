import { inject, Injectable } from "@angular/core";

import { ArmourLocalMapper } from "../../mappers";
import { ArmourLocalDto } from "../../models";

import { ARMOUR_TABLE } from "../../../db";
import { ArmourType } from "../../shared/enums";

@Injectable({
  providedIn: 'root'
})
export class ArmourLocalService {
  private _armourTable = ARMOUR_TABLE;

  private _baseMapper = inject(ArmourLocalMapper);

  getAll() {
    return this._armourTable;
  }

  getAllDto() {
    let armourMap: Map<ArmourType, (ArmourLocalDto | undefined)[]> = new Map();

    this._armourTable.forEach((modelList, armourType) => {
      armourMap.set(armourType, modelList.map(armour => {
        return armour ? this._baseMapper.modelToDtoWithType(armour, armourType) : undefined;
      }));
    });

    return armourMap;
  }

}