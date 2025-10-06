import { BaseDto, BaseItem, MaterialCraft, MaterialCraftDto } from "./";

interface BaseArmour extends BaseItem {
    base?: boolean;
}

export interface Armour extends BaseArmour {
    materials?: MaterialCraft[];
}

export interface ArmourDto extends BaseArmour, BaseDto {
    materials?: MaterialCraftDto[];
}