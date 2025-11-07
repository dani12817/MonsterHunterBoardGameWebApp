import { BaseLocal } from "../base";

interface BaseDocument extends BaseLocal {
    name: string;
    icon: string;
    link: string;
}

export interface DocumentLocal extends BaseDocument {
}

export interface DocumentLocalDto extends BaseDocument {
}