import { BaseEquipment, BaseEquipmentDto } from "./";

export interface WeaponLocal extends BaseEquipment {
    upgrade?: number[];
}

export interface WeaponLocalDto extends BaseEquipmentDto {
    //upgrade?: WeaponLocalDto[];
}