import { Injectable } from "@angular/core";

import { MaterialCraft, MaterialCraftDto } from "../../models";

import { MATERIAL_TABLE } from "../../../db";
import { CommonMethods } from "../../shared/common-methods";

@Injectable({
  providedIn: 'root'
})
export class EquipmentLocalMapper {
    private _materialsDB = MATERIAL_TABLE;

    public mapMaterialsCraft(materialsCraft: MaterialCraft[]) {
        let materialsCraftDto: MaterialCraftDto[] = [];

        for (const materialCraft of materialsCraft) {
            let material = this._materialsDB[materialCraft.material ?? 0];
            materialsCraftDto.push({
                material: {
                    ...material,
                    icon: CommonMethods.generateMaterialIcon(material),
                    image: "",
                    monsters: undefined,
                    gathering: undefined,
                    reward: undefined
                },
                amount: materialCraft.amount ?? 0
            });
        }

        return materialsCraftDto;
    }

}