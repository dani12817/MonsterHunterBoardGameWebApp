import { Injectable } from "@angular/core";

import { BaseMapper } from ".";
import { MaterialLocal, MaterialLocalDto } from "../models";

import { CommonMethods } from "../shared/common-methods";

@Injectable({
  providedIn: 'root'
})
export class MaterialLocalMapper extends BaseMapper<MaterialLocal, MaterialLocalDto> {

    public dtoToModel(dto: MaterialLocalDto) : MaterialLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: MaterialLocal) : MaterialLocalDto {
        return {
            ...model,
            name: model.name,
            icon: CommonMethods.generateMaterialIcon(model.image, model.type),
            image: CommonMethods.generateMaterialImage(model.image, model.type),
            gathering: [],
            monsters: [],
            reward: []
        };
    }

}