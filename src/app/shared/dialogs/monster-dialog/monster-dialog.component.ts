import { Component, inject, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseEquipmentCardComponent, GatheringCardComponent } from '../../components';

import { MonsterLocalService } from '../../../providers';

import { MonsterLocalDto } from '../../../models';

@Component({
  selector: 'app-monster-dialog',
  imports: [
    RouterModule, NgIf,
    MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    BaseEquipmentCardComponent, GatheringCardComponent,
    TranslatePipe
],
  templateUrl: './monster-dialog.component.html',
  styleUrl: './monster-dialog.component.scss'
})
export class MonsterDialogComponent {
  private _monsterService = inject(MonsterLocalService);

  monster: MonsterLocalDto;

  constructor(private dialogRef: MatDialogRef<MonsterDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: {monsterId: number}) {
    // console.log("equipmentToForge", this.data);
    this.monster = this._monsterService.getDtoById(data.monsterId);
  }

}
