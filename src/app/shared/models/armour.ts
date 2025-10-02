import { BaseItem } from "./base";

import { MaterialCraft, MaterialCraftDto } from "./";

interface BaseArmour extends BaseItem {
    base?: boolean;
}

export interface Armour extends BaseArmour {
    materials?: MaterialCraft[];
    //upgrade?: number;
}

export interface ArmourDto extends BaseArmour {
    icon: string;
    materials?: MaterialCraftDto[];
    //upgrade?: ArmourDto;
}