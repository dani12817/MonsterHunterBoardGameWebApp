import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";

import { UserService } from '../providers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>(async (resolve, reject) => {
        let userLogged = await this.userService.getLoggedInUser();

        if (!userLogged) {
        this.router.navigate(['/login']);
        }

        resolve(userLogged != undefined)
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }
}
