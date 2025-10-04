import { BaseDto, BaseItem } from "./base";

import { MaterialCraft, MaterialCraftDto } from "./";

interface BaseWeapon extends BaseItem {
    base?: boolean;
}

export interface Weapon extends BaseWeapon {
    materials?: MaterialCraft[];
    previous?: number;
    upgrade?: number[];
}

export interface WeaponDto extends BaseWeapon, BaseDto {
    materials?: MaterialCraftDto[];
    previous?: WeaponDto;
    upgrade?: WeaponDto[];
}