import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { UserService } from '../../providers';

import { SidenavComponent } from '../../shared/components';

@Component({
  selector: 'app-main',
  imports: [
    RouterModule,
    MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule, MatSidenavModule, MatMenuModule,
    SidenavComponent,
    TranslatePipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private _router = inject(Router);
  private _userService = inject(UserService);

  logout() {
    this._userService.logout().then(() => {
      this._router.navigate(["/login"]);
    });
  }
}
