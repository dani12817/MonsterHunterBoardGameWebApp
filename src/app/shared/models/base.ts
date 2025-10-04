export interface BaseEntity {
    id?: number;
    name?: string;
}

export interface BaseItem extends BaseEntity {
    rarity?: number;
}

export interface BaseDto {
    icon: string;
    image: string;
}