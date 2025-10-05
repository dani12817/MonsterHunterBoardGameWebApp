export interface BaseModel {
    id?: number;
    name?: string;
}

export interface BaseItem extends BaseModel {
    rarity?: number;
}

export interface BaseDto {
    icon: string;
    image: string;
}

// Firebase

export interface BaseFirebase {
    id?: string;
    name?: string;
}
