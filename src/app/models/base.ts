export interface BaseModel {
    name?: string;
}

// Local BBDD

export interface BaseLocal extends BaseModel {
    id?: number;
}

export interface BaseItem extends BaseLocal {
    rarity: number;
}

export interface BaseEquipment extends BaseLocal {
    base?: boolean;
    previous?: number;
}

export interface BaseDto {
    icon: string;
    image: string;
}

// Firebase

export interface BaseFirebase extends BaseModel {
    id?: string;
}
