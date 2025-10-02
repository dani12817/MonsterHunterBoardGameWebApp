import { Material } from "./";

export interface MaterialCraft {
    material?: number;
    amount?: number;
}

export interface MaterialCraftDto {
    material?: Material[];
    amount?: number;
}