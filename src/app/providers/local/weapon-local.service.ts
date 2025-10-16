import { inject, Injectable } from "@angular/core";

import { WeaponLocalMapper } from "../../mappers";
import { WeaponLocalDto } from "../../models";

import { WEAPON_TABLE } from "../../../db";
import { WeaponType } from "../../shared/enums";

@Injectable({
  providedIn: 'root'
})
export class WeaponLocalService {
  private _weaponsTable = WEAPON_TABLE;

  private _baseMapper = inject(WeaponLocalMapper);

  getAll() {
    return this._weaponsTable;
  }

  getAllDto() {
    let weaponMap: Map<WeaponType, (WeaponLocalDto | undefined)[]> = new Map();

    this._weaponsTable.forEach((modelList, weaponType) => {
      weaponMap.set(weaponType, modelList.map(weapon => {
        return weapon ? this._baseMapper.modelToDtoWithType(weapon, weaponType) : undefined;
      }));
    });

    return weaponMap;
  }

}