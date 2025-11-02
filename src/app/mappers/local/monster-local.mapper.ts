import { inject, Injectable } from "@angular/core";

import { ArmourLocalMapper, BaseMapper, WeaponLocalMapper } from "..";
import { BaseMapperMethods } from "./base-mapper-methods";

import { GatheringPhase, MonsterLocal, MonsterLocalDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";

import { MATERIAL_TABLE } from "../../../db";

@Injectable({
  providedIn: 'root'
})
export class MonsterLocalMapper extends BaseMapper<MonsterLocal, MonsterLocalDto> {
    private weaponMapper = inject(WeaponLocalMapper);
    private armourMapper = inject(ArmourLocalMapper);

    public dtoToModel(dto: MonsterLocalDto) : MonsterLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: MonsterLocal) : MonsterLocalDto {
        return {
            ...this.modelToDtoListMapper(model),
            materials: model.materials.map(m => BaseMapperMethods.modelToBaseMaterialDtoMapper(MATERIAL_TABLE[m])),
            gathering: this._mapGatheringPhase(model.gathering),
            weapons: this.weaponMapper.mapToAllWeaponTypes(model.weapons),
            armours: this.armourMapper.mapToAllWeaponTypes(model.armours)
        };
    }

    protected override modelToDtoListMapper(model: MonsterLocal): MonsterLocalDto {
        return {
            ...model,
            name: `monster.${model.name}`,
            icon: CommonMethods.generateMonsterIcon(model.name!),
            image: CommonMethods.generateMonsterImage(model.name!),
            materials: [],
            gathering: [],
            weapons: [],
            armours: []
        };
    }

    private _mapGatheringPhase(gatheringList: GatheringPhase[]) {
        return gatheringList.map(g => {
            return {
                entry: g.entry,
                materials: g.materials.map(m => BaseMapperMethods.modelToBaseMaterialDtoMapper(MATERIAL_TABLE[m]))
            }
        });
    }

}