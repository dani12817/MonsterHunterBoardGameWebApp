import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BaseElementCardComponent } from '../../../shared/components';
import { MaterialDialogComponent } from '../../../shared/dialogs';

import { MaterialLocalService } from '../../../providers';
import { MaterialLocalDto, UserDetail } from '../../../models';

import { CommonMethods } from '../../../shared/common-methods';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    BaseElementCardComponent
  ],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.scss'
})
export class MaterialListComponent {
  private readonly _dialog = inject(MatDialog);

  private _materialService = inject(MaterialLocalService);

  materialList: MaterialLocalDto[] = this._materialService.getAllDto();
  userLogged!: UserDetail;

  constructor() { }

  openMaterialData(material: MaterialLocalDto) {
    this._dialog.open(MaterialDialogComponent, 
      CommonMethods.dialogConfig('1200px', 'material-dialog', 
        { materialId: material.id }));
  }

}
