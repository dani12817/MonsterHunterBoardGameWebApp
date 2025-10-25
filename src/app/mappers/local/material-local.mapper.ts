import { Injectable } from "@angular/core";

import { BaseMapper } from "..";
import { MaterialLocal, MaterialLocalDto } from "../../models";

import { CommonMethods } from "../../shared/common-methods";

@Injectable({
  providedIn: 'root'
})
export class MaterialLocalMapper extends BaseMapper<MaterialLocal, MaterialLocalDto> {

    public dtoToModel(dto: MaterialLocalDto) : MaterialLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: MaterialLocal) : MaterialLocalDto {
        return {
            ...this.modelToBasicDto(model),
            gathering: [],
            monsters: [],
            reward: []
        };
    }

    public modelToBasicDto(model: MaterialLocal) : MaterialLocalDto {
        return {
            ...model,
            name: model.name,
            icon: CommonMethods.generateMaterialIcon(model),
            image: CommonMethods.generateMaterialImage(model),
            gathering: [],
            monsters: [],
            reward: []
        };
    }

}