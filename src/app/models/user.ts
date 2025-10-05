import { BaseFirebase } from "./base";

export interface UserDetail extends BaseFirebase {
    username?: string;
    email?: string;
    avatar?: string;
}