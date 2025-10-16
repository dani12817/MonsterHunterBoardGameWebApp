import { BaseDto, BaseItem, Monster } from "..";

import { MaterialType } from "../../shared/enums";

interface BaseMaterial extends BaseItem {
  description: string;
  type: MaterialType;
  image: string;
}

export interface MaterialLocal extends BaseMaterial {
  monsters?: number[];
  gathering?: number[];
  reward?: number[];
}

export interface MaterialLocalDto extends BaseMaterial, BaseDto {
  monsters?: Monster[];
  gathering?: Monster[];
  reward?: Monster[];
}