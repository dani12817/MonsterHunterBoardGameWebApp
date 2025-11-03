import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BaseElementCardComponent } from '../../../shared/components';
import { CardDialogComponent } from '../../../shared/dialogs';

import { ArmourLocalService } from '../../../providers';
import { ArmourLocalDto, UserDetail } from '../../../models';

import { CommonMethods } from '../../../shared/common-methods';

@Component({
  selector: 'app-armour-list',
  imports: [
    RouterModule, NgIf, TranslatePipe,
    MatButtonModule, MatIconModule,
    BaseElementCardComponent
  ],
  templateUrl: './armour-list.component.html',
  styleUrl: './armour-list.component.scss'
})
export class ArmourListComponent {
  private readonly _dialog = inject(MatDialog);

  private _armourService = inject(ArmourLocalService);

  armourList = this._armourService.getAllDto();
  userLogged!: UserDetail;

  CommonMetods = CommonMethods;

  constructor() { }

  openCard(armour: ArmourLocalDto) {
    this._dialog.open(CardDialogComponent, 
      CommonMethods.dialogConfig('420px', 'card-dialog', 
        { equipment: armour, showMaterials: true }));
  }

}
