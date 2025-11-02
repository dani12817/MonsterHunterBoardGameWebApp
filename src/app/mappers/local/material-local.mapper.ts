import { inject, Injectable } from "@angular/core";

import { BaseMapper } from "..";
import { BaseMapperMethods } from "./base-mapper-methods";

import { MaterialLocal, MaterialLocalDto } from "../../models";

import { MONSTER_TABLE } from "../../../db";

@Injectable({
  providedIn: 'root'
})
export class MaterialLocalMapper extends BaseMapper<MaterialLocal, MaterialLocalDto> {

    public dtoToModel(dto: MaterialLocalDto) : MaterialLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: MaterialLocal) : MaterialLocalDto {
        return {
            ...this.modelToDtoListMapper(model),
            gathering: model.gathering?.map(g => BaseMapperMethods.modelToBaseMonsterDtoMapper(MONSTER_TABLE[g])),
            monsters: model.monsters?.map(m => BaseMapperMethods.modelToBaseMonsterDtoMapper(MONSTER_TABLE[m])),
            reward: model.reward?.map(r => BaseMapperMethods.modelToBaseMonsterDtoMapper(MONSTER_TABLE[r]))
        };
    }
    
    protected override modelToDtoListMapper(model: MaterialLocal): MaterialLocalDto {
        return BaseMapperMethods.modelToBaseMaterialDtoMapper(model);
    }

}