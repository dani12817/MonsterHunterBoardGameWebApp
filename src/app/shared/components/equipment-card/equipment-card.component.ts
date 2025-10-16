import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BaseEquipmentCardComponent } from '../base-equipment-card/base-equipment.component';
import { ForgeEquipmentDialogComponent } from '../../dialogs';

import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'equipment-card',
  imports: [
    RouterModule, NgIf,
    MatButtonModule, MatIconModule,
    TranslatePipe
  ],
  templateUrl: './equipment-card.component.html',
  styleUrl: './equipment-card.component.scss'
})
export class EquipmentCardComponent extends BaseEquipmentCardComponent {
  @Input({ required: true }) hunterEquipmentEquipped!: number;
  @Input({ required: true }) hunterEquipmentList!: number[];
  @Input({ required: true }) materialsList!: number[];
  
  @Output() changeEquipped = new EventEmitter<number>();
  @Output() equipmentForged = new EventEmitter<number>();

  isForged() {
    return !!this.hunterEquipmentList[this.equipment.id];
  }

  isEquipped() {
    return this.hunterEquipmentEquipped === this.equipment.id;
  }

  canBeForged() {
    return !this.equipment.previous || !!this.hunterEquipmentList[this.equipment.previous];
  }

  equipEquipment() {
    this.changeEquipped.emit(this.equipment.id);
  }

  openForgeEquipment() {
    const dialogRef = this._dialog.open(ForgeEquipmentDialogComponent, 
      CommonMethods.dialogConfig('420px', 'forge-equipment-dialog', 
        {equipmentToForge: this.equipment, materialsList: this.materialsList}));

    dialogRef.afterClosed().subscribe((forged: any) => {
      // console.log("afterClosed", equipmentForged);
      if (forged) {
        if (!forged.forceWithoutMaterials) {
          this._useMaterialsToForge();
        }
        this.equipmentForged.emit(this.equipment.id);
      }
    });
  }

  private _useMaterialsToForge() {
    for (const material of this.equipment.materials ?? []) {
      this.materialsList[material.material.id] -= material.amount;
    }
  }

}
