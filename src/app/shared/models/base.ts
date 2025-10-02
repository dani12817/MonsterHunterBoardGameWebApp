export interface BaseEntity {
    id?: number;
    name?: string;
    image?: string;
}

export interface BaseItem extends BaseEntity {
    rarity?: number;
}