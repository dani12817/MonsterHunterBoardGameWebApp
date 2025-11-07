import { inject, Injectable } from "@angular/core";

import { BaseMapper, EquipmentLocalMapper } from "..";

import { WeaponLocal, WeaponLocalDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";
import { WeaponType } from "../../shared/enums";

import { WEAPON_TABLE } from "../../../db";

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
            ...this.modelToBasicDto(model, weaponType),
            materials: this._equipmentLocalMapper.mapMaterialsCraft(model.materials ?? [])
        };
    }
    
    public modelToBasicDto(model: WeaponLocal, weaponType: WeaponType) : WeaponLocalDto {
        return {
            ...model,
            name: `weapon.${weaponType}.${model.name}.rarity${model.rarity}`,
            icon: CommonMethods.generateWeaponRarityIcon(model.rarity, weaponType),
            image: CommonMethods.generateWeaponImage(model.name!, model.rarity, weaponType),
            previousEquipment: this.mapPreviousWeapon(model.previous, weaponType),
            materials: []
        };
    }

    public mapToAllWeaponTypes(weaponIds: number[]) {
        let weaponList: WeaponLocalDto[] = [];

        for (const weaponType of WEAPON_TABLE.keys()) {
            if (WEAPON_TABLE.get(weaponType)![weaponIds[0]]) {
                weaponList.push(...weaponIds.map(w =>
                    this.modelToBasicDto(WEAPON_TABLE.get(weaponType)![w]!, weaponType)));
            }
        }

        return weaponList;
    }

    private mapPreviousWeapon(previous: number | undefined, weaponType: WeaponType) {
        if (previous) {
            let previousWeapon = WEAPON_TABLE.get(weaponType)![previous];
            return {
                id: previousWeapon!.id,
                name: `weapon.${weaponType}.${previousWeapon!.name}.rarity${previousWeapon!.rarity}`,
            };
        }

        return undefined;
    }

}