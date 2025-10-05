import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { UserService } from '../providers';
import { UserDetail } from '../models';
 
 
@Injectable({
  providedIn: 'root'
})
export class AuthUserResolverService implements Resolve<any> {
    private _userService = inject(UserService);
    
    resolve(): Promise<UserDetail | undefined> {
        return new Promise((resolve, reject) => {
            this._userService.getLoggedInUser().then(loggedInUser => {
                resolve(loggedInUser);
            }).catch(error => {
                reject(error);
            });
        });
    }
}