import { Injectable } from "@angular/core";

import { MaterialCraft, MaterialCraftDto } from "../models";

import { MATERIAL_TABLE } from "../../db";

@Injectable({
  providedIn: 'root'
})
export class EquipmentLocalMapper {
    private _materialsDB = MATERIAL_TABLE;

    public mapMaterialsCraft(materialsCraft: MaterialCraft[]) {
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