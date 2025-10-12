import { Component, Inject, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseEquipmentDto, MaterialCraftDto } from '../../../models';
import { NgClass } from "../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-forge-equipment-dialog',
  imports: [
    RouterModule,
    MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    TranslatePipe
],
  templateUrl: './forge-equipment-dialog.component.html',
  styleUrl: './forge-equipment-dialog.component.scss'
})
export class ForgeEquipmentDialogComponent {
  private _translate = inject(TranslateService);

  equipmentToForge: BaseEquipmentDto;
  materialsList: number[];

  cannotBeForged: boolean = true;

  constructor(private dialogRef: MatDialogRef<ForgeEquipmentDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    // console.log("equipmentToForge", this.data);
    this.equipmentToForge = this.data.equipmentToForge;
    this.materialsList = this.data.materialsList;
  
    this._checkEquipmentToForge();
  }

  private _checkEquipmentToForge() {
    for (const materialCraft of this.equipmentToForge.materials!) {
      this.cannotBeForged = !this.hasMaterialsNeeded(materialCraft);
    }
  }

  public hasMaterialsNeeded(materialCraft: MaterialCraftDto) {
    return this.materialsList[materialCraft.material.id - 1] >= materialCraft.amount;
  }

  forgeEquipment() {
    this.dialogRef.close(true);
  }

}
