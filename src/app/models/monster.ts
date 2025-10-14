import { BaseDto, BaseLocal, ArmourLocal, MaterialLocal, WeaponLocal } from "./";

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
  weapons: WeaponLocal[];
  armour: ArmourLocal[];
}

export interface GatheringPhaseDto {
  materials: MaterialLocal[];
  entry: number;
}