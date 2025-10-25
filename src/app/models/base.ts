import { MaterialCraft, MaterialCraftDto } from "./local/material-craft";

export interface BaseModel {
    [key: string]: any,
    name?: string;
}

// Local BBDD

export interface BaseLocal extends BaseModel {
    id: number;
}

export interface BaseItem extends BaseLocal {
    rarity: number;
}

export interface BaseEquipment extends BaseItem {
    base?: boolean;
    materials?: MaterialCraft[];
    previous?: number;
}

export interface BaseEquipmentDto extends BaseDto, BaseItem {
    base?: boolean;
    materials?: MaterialCraftDto[];
    previous?: number;
    //previous?: WeaponLocalDto;
}

export interface BaseDto extends BaseLocal {
    icon: string;
    image: string;
}

// Firebase

export interface BaseFirebase extends BaseModel {
    id?: string;
}
