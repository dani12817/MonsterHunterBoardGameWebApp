import { Component, inject, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseElementCardComponent } from '../../components';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

import { MaterialLocalService } from '../../../providers';

import { MaterialLocalDto, MonsterLocalDto } from '../../../models';

import { CommonMethods } from '../../common-methods';
import { MONSTER_TABLE } from '../../../../db';

@Component({
  selector: 'app-material-dialog',
  imports: [
    RouterModule, NgIf,
    MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    BaseElementCardComponent,
    TranslatePipe
],
  templateUrl: './material-dialog.component.html',
  styleUrl: './material-dialog.component.scss'
})
export class MaterialDialogComponent {
  private readonly _dialog = inject(MatDialog);

  private _materialService = inject(MaterialLocalService);

  material: MaterialLocalDto;

  constructor(private dialogRef: MatDialogRef<MaterialDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: {materialId: number}) {
    // console.log("equipmentToForge", this.data);
    this.material = this._materialService.getDtoById(data.materialId);
  }

  openMonsterMaterialData(monster: MonsterLocalDto) {
    this._dialog.open(CardDialogComponent, 
      CommonMethods.dialogConfig('1200px', 'monster-material-dialog', 
        { monsterType: MONSTER_TABLE[monster.id].name }));
  }

}
