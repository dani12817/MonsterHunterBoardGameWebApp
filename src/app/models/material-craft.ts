import { MaterialLocal } from "./";

export interface MaterialCraft {
    material?: number;
    amount?: number;
}

export interface MaterialCraftDto {
    material?: MaterialLocal[];
    amount?: number;
}