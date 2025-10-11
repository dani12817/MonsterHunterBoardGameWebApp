import { BaseDto, BaseItem, MaterialCraft, MaterialCraftDto } from "./";

interface BaseWeapon extends BaseItem {
    base?: boolean;
}

export interface WeaponLocal extends BaseWeapon {
    materials?: MaterialCraft[];
    previous?: number;
    upgrade?: number[];
}

export interface WeaponLocalDto extends BaseWeapon, BaseDto {
    materials?: MaterialCraftDto[];
    previous?: number;
    //previous?: WeaponLocalDto;
    //upgrade?: WeaponLocalDto[];
}