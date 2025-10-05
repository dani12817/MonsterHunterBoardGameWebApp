import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../providers';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _router = inject(Router);
  private _userService = inject(UserService);

  loginWithProvider() {
    this._userService.signInWithGoogle().then(response => {
      //console.log("signInWithGoogle", response);
      this._router.navigate(['/']);
    }).catch(err => console.error(err));
  }
}
