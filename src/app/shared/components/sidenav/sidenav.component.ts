import { AfterViewInit, Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UserDetail } from '../../../models';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterModule, NgIf, FormsModule, ReactiveFormsModule,
    MatListModule, MatIconModule, MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private readonly _dialog = inject(MatDialog);

  @Input({ required: true }) sidenav!: MatSidenav;

  authUser: UserDetail | undefined;

  sidenavLinks: MenuItem[] = [
    {icon: 'home', route: ['/'], title: 'app.menu.campaigns', disabled: false},
    {icon: 'groups', route: ['/'], title: 'app.menu.monsters', disabled: false},
    {icon: 'supervised_user_circle', route: ['/'], title: 'app.menu.materials', disabled: false},
    {icon: 'person', route: ['/'], title: 'app.menu.weapons', disabled: false},
    {icon: 'book_6', route: ['/'], title: 'app.menu.armours', disabled: false},
    {icon: 'sell', route: ['/'], title: 'app.menu.specialRules', disabled: true},
  ];

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((routeData: any) => {
      // console.log("activatedRoute", routeData?.authResolver);
      this.authUser = routeData?.authResolver;
    });
  }

  closeSideNav(): void {
    this.sidenav.close();
  }

  openSidenav(): void {
    setTimeout(() => {
      this.sidenav.open();
    }, 10);
  }
}

interface MenuItem {
  icon: string,
  route?: string[],
  title: string,
  disabled: boolean
}
