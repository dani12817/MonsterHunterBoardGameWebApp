import { inject, Injectable } from "@angular/core";

import { BaseMapper, EquipmentLocalMapper } from "..";

import { ArmourLocal, ArmourLocalDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";
import { ArmourType } from "../../shared/enums";

@Injectable({
  providedIn: 'root'
})
export class ArmourLocalMapper extends BaseMapper<ArmourLocal, ArmourLocalDto> {
    private _equipmentLocalMapper = inject(EquipmentLocalMapper);

    public dtoToModel(dto: ArmourLocalDto) : ArmourLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: ArmourLocal) : ArmourLocalDto {
        throw new Error("not Implemented")
    }

    public modelToDtoWithType(model: ArmourLocal, armourType: ArmourType) : ArmourLocalDto {
        return {
            ...model,
            name: `armour.${armourType}.${model.name}`,
            icon: CommonMethods.generateArmourRarityIcon(model.rarity, armourType),
            image: CommonMethods.generateArmourImage(model.name!, armourType),
            materials: this._equipmentLocalMapper.mapMaterialsCraft(model.materials ?? [])
        };
    }

}