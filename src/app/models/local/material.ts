import { BaseDto, BaseItem, MonsterLocalDto } from "..";

import { MaterialCategory, MaterialType } from "../../shared/enums";

interface BaseMaterial extends BaseItem {
  description: string;
  type: MaterialType;
  image: string;
  category: MaterialCategory;
}

export interface MaterialLocal extends BaseMaterial {
  monsters?: number[];
  gathering?: number[];
  reward?: number[];
}

export interface MaterialLocalDto extends BaseMaterial, BaseDto {
  monsters?: MonsterLocalDto[];
  gathering?: MonsterLocalDto[];
  reward?: MonsterLocalDto[];
}