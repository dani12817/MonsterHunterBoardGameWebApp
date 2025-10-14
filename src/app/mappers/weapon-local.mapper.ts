import { inject, Injectable } from "@angular/core";

import { BaseMapper, EquipmentLocalMapper } from ".";

import { WeaponLocal, WeaponLocalDto } from "../models";

import { CommonMethods } from "../shared/common-methods";
import { WeaponType } from "../shared/enums";

@Injectable({
  providedIn: 'root'
})
export class WeaponLocalMapper extends BaseMapper<WeaponLocal, WeaponLocalDto> {
    private _equipmentLocalMapper = inject(EquipmentLocalMapper);

    public dtoToModel(dto: WeaponLocalDto) : WeaponLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: WeaponLocal) : WeaponLocalDto {
        throw new Error("not Implemented")
    }

    public modelToDtoWithType(model: WeaponLocal, weaponType: WeaponType) : WeaponLocalDto {
        return {
            ...model,
            name: `weapon.${weaponType}.${model.name}.rarity${model.rarity}`,
            icon: CommonMethods.generateWeaponRarityIcon(model.rarity, weaponType),
            image: CommonMethods.generateWeaponImage(model.name!, model.rarity, weaponType),
            materials: this._equipmentLocalMapper.mapMaterialsCraft(model.materials ?? [])
        };
    }

}