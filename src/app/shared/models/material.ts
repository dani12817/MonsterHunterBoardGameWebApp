import { BaseItem } from "./base";
import { MaterialType } from "../enums";
import { Monster } from "./";

interface BaseMaterial extends BaseItem {
  description: string;
  type: MaterialType;
  image: string;
}

export interface Material extends BaseMaterial {
  monsters?: number[];
  gathering?: number[];
  reward?: number[];
}

export interface MaterialDto extends BaseMaterial {
  icon: string;
  monsters?: Monster[];
  gathering?: Monster[];
  reward?: Monster[];
}