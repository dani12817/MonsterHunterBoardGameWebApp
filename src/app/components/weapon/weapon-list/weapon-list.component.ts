import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BaseElementCardComponent } from '../../../shared/components';
import { CardDialogComponent } from '../../../shared/dialogs';

import { WeaponLocalService } from '../../../providers';
import { WeaponLocalDto, UserDetail } from '../../../models';

import { CommonMethods } from '../../../shared/common-methods';

@Component({
  selector: 'app-weapon-list',
  imports: [
    RouterModule, NgIf, TranslatePipe,
    MatButtonModule, MatIconModule,
    BaseElementCardComponent
  ],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.scss'
})
export class WeaponListComponent {
  private readonly _dialog = inject(MatDialog);

  private _weaponService = inject(WeaponLocalService);

  weaponList = this._weaponService.getAllDto();
  userLogged!: UserDetail;

  CommonMetods = CommonMethods;

  constructor() { }

  openCard(weapon: WeaponLocalDto) {
    this._dialog.open(CardDialogComponent, 
      CommonMethods.dialogConfig('420px', 'card-dialog', 
        { equipment: weapon, showMaterials: true }));
  }

}
