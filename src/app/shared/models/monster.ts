import { BaseDto, BaseEntity } from "./base";
import { Armour, Material, Weapon } from "./";

interface BaseMonster extends BaseEntity {
  description: string;
}

export interface Monster extends BaseMonster {
  materials: number[];
  gathering: GatheringPhase[];
  weapons: number[];
  armour: number[];
}

export interface GatheringPhase {
  materials: number[];
  entry: number;
}

export interface MonsterDto extends BaseMonster, BaseDto {
  materials: Material[];
  gathering: GatheringPhaseDto[];
  weapons: Weapon[];
  armour: Armour[];
}

export interface GatheringPhaseDto {
  materials: Material[];
  entry: number;
}