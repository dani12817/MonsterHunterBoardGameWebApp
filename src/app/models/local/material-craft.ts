import { MaterialLocalDto } from "..";

export interface MaterialCraft {
    material?: number;
    amount?: number;
}

export interface MaterialCraftDto {
    material: MaterialLocalDto;
    amount: number;
}