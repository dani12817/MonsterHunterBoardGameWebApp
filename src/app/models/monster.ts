import { BaseDto, BaseLocal, Armour, MaterialLocal, Weapon } from "./";

interface BaseMonster extends BaseLocal {
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
  materials: MaterialLocal[];
  gathering: GatheringPhaseDto[];
  weapons: Weapon[];
  armour: Armour[];
}

export interface GatheringPhaseDto {
  materials: MaterialLocal[];
  entry: number;
}