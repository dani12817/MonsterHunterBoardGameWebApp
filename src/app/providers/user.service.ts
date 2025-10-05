import { inject, Injectable } from "@angular/core";
import { getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";

import { BaseService } from "./base.service";

import { UserMapper } from "../mappers/user.mapper";

import { UserDetail } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserDetail, UserDetail> {
    private _provider = new GoogleAuthProvider();
    private _auth = getAuth();

    private _userMapper = inject(UserMapper);

    userLogged: UserDetail | undefined;

    protected override getCollectionName(): string {
        return "user";
    }

    protected override _baseMapper() {
        return this._userMapper;
    }

    signInWithGoogle() {
        return new Promise<any>((resolve, reject) => {
            signInWithPopup(this._auth, this._provider)
                .then(async result => {
                    //console.log("signInWithGoogle", result);
                    let userLogged = await this.getById(result.user.uid);
            
                    if (userLogged === undefined) {
                    //console.log("create");
                    this.userLogged = await this.save(this.convertUser(result));
                    //this._localStorageService.setItem('userLogged', this.userLogged);
                    } else { this.userLogged = userLogged; }
            
                    resolve(result);
                }).catch(err => reject(err))
        });
    }

    getLoggedInUser(): Promise<UserDetail | undefined> {
        return new Promise(async (resolve, reject) => {
            //console.log("getLoggedInUser", this.userLogged);
    
            if (this.userLogged) {
                //console.log("use userLogged");
                resolve(this.userLogged);
            } else {
                this._auth.onAuthStateChanged(async (userData) => {
                    //console.log("onAuthStateChanged", userData?.uid);
                    if (userData != null) {
                        this.userLogged = await this.getById(userData.uid);
                        //this._localStorageService.setItem('userLogged', this.userLogged);
                        resolve(this.userLogged);
                    } else {
                    resolve(undefined);
                    }
                }), () => resolve(undefined);
            }
        });
    }
    
    logout(): Promise<void> {
        this.userLogged = undefined;
        //this._localStorageService.removeItem('userLogged');
        return this._auth.signOut();
    }
    

    private convertUser(userData: UserCredential): UserDetail {
        return {
            id: userData.user.uid,
            name: userData.user.displayName!,
            username: userData.user.email?.split('@', 1)[0],
            email: userData.user.email!,
            //avatar: "/assets/img/no_avatar.webp",
        };
    }

}