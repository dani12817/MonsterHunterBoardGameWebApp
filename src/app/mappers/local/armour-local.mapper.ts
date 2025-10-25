import { inject, Injectable } from "@angular/core";

import { BaseMapper, EquipmentLocalMapper } from "..";

import { ArmourLocal, ArmourLocalDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";
import { ArmourType } from "../../shared/enums";
import { ARMOUR_TABLE } from "../../../db";

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
            ...this.modelToBasicDto(model, armourType),
            materials: this._equipmentLocalMapper.mapMaterialsCraft(model.materials ?? [])
        };
    }

    public modelToBasicDto(model: ArmourLocal, armourType: ArmourType) : ArmourLocalDto {
        return {
            ...model,
            name: `armour.${armourType}.${model.name}`,
            icon: CommonMethods.generateArmourRarityIcon(model.rarity, armourType),
            image: CommonMethods.generateArmourImage(model.name!, armourType),
            materials: []
        };
    }
    
    public mapToAllWeaponTypes(armourIds: number[]) {
        let armourList: ArmourLocalDto[] = [];

        for (const armourType of ARMOUR_TABLE.keys()) {
            armourList.push(...armourIds.map(a => 
                this.modelToBasicDto(ARMOUR_TABLE.get(armourType)![a]!, armourType)));
        }

        return armourList;
    }

}