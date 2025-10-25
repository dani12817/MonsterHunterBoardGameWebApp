import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BaseElementCardComponent } from '../../../shared/components';
import { MonsterDialogComponent } from '../../../shared/dialogs';

import { MonsterLocalService, UserService } from '../../../providers';
import { MonsterLocalDto, UserDetail } from '../../../models';

import { CommonMethods } from '../../../shared/common-methods';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    BaseElementCardComponent
  ],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.scss'
})
export class MonsterListComponent {
  private readonly _dialog = inject(MatDialog);

  private _userService = inject(UserService);
  private _monsterService = inject(MonsterLocalService);

  monsterList: MonsterLocalDto[] = this._monsterService.getAllDto();
  userLogged!: UserDetail;

  constructor() {
    this._userService.getLoggedInUser().then(async response => {
      this.userLogged = response!;
    });
  }

  openMonsterData(monster: MonsterLocalDto) {
    console.log("monster", monster);
    this._dialog.open(MonsterDialogComponent, 
      CommonMethods.dialogConfig('1200px', 'monster-dialog', 
        { monsterId: monster.id }));
  }

}
