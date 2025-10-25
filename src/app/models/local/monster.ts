import { 
  BaseDto, BaseLocal, 
  MaterialLocalDto, WeaponLocalDto, ArmourLocalDto
} from "..";

interface BaseMonster extends BaseLocal {
  description: string;
}

export interface MonsterLocal extends BaseMonster {
  materials: number[];
  gathering: GatheringPhase[];
  weapons: number[];
  armours: number[];
}

export interface GatheringPhase {
  materials: number[];
  entry: number;
}

export interface MonsterLocalDto extends BaseMonster, BaseDto {
  materials: MaterialLocalDto[];
  gathering: GatheringPhaseDto[];
  weapons: WeaponLocalDto[];
  armours: ArmourLocalDto[];
}

export interface GatheringPhaseDto {
  materials: MaterialLocalDto[];
  entry: number;
}