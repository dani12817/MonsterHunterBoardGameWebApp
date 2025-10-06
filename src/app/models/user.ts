import { BaseFirebase } from "./";

export interface UserDetail extends BaseFirebase {
    username?: string;
    email?: string;
    avatar?: string;
}