import { Injectable } from "@angular/core";

import { BaseMapper } from ".";
import { MaterialCraft, MaterialCraftDto, WeaponLocal, WeaponLocalDto } from "../models";

import { CommonMethods } from "../shared/common-methods";
import { WeaponType } from "../shared/enums";
import { MATERIAL_TABLE } from "../../db";

@Injectable({
  providedIn: 'root'
})
export class WeaponLocalMapper extends BaseMapper<WeaponLocal, WeaponLocalDto> {
    private _materialsDB = MATERIAL_TABLE;

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
            materials: this._mapMaterialsCraft(model.materials ?? [])
        };
    }

    private _mapMaterialsCraft(materialsCraft: MaterialCraft[]) {
        let materialsCraftDto: MaterialCraftDto[] = [];

        for (const materialCraft of materialsCraft) {
            materialsCraftDto.push({
                material: this._materialsDB[materialCraft.material ?? 0],
                amount: materialCraft.amount ?? 0
            });
        }

        return materialsCraftDto;
    }

}