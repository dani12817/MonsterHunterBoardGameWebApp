
import { Injectable } from '@angular/core';

import { MaterialLocal, MaterialLocalDto, MonsterLocal, MonsterLocalDto } from '../../models';

import { CommonMethods } from '../../shared/common-methods';

@Injectable()
export class BaseMapperMethods {

    public static modelToBaseMaterialDtoMapper(model: MaterialLocal): MaterialLocalDto {
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
    
    public static modelToBaseMonsterDtoMapper(model: MonsterLocal): MonsterLocalDto {
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

}