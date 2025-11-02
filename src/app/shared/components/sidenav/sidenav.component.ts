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
    {icon: 'diversity_3', route: ['/'], title: 'app.menu.campaigns', disabled: false},
    {icon: 'pets', route: ['/monster'], title: 'app.menu.monsters', disabled: false},
    {icon: 'pet_supplies', route: ['/material'], title: 'app.menu.materials', disabled: false},
    {icon: 'swords', route: ['/'], title: 'app.menu.weapons', disabled: false},
    {icon: 'apparel', route: ['/'], title: 'app.menu.armours', disabled: false},
    {icon: 'book_4', route: ['/'], title: 'app.menu.specialRules', disabled: true},
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
