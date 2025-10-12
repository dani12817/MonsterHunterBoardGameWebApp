import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
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
  @Input({ required: true }) equipmentIndex!: number;
  @Input({ required: true }) materialsList!: number[];
  
  @Output() changeEquipped = new EventEmitter<number>();
  @Output() equipmentForged = new EventEmitter<number>();

  isForged() {
    return !!this.hunterEquipmentList[this.equipmentIndex];
  }

  isEquipped() {
    return this.hunterEquipmentEquipped - 1 === this.equipmentIndex;
  }

  canBeForged() {
    return !this.equipment.previous || !!this.hunterEquipmentList[this.equipment.previous! - 1];
  }

  equipEquipment() {
    this.changeEquipped.emit(this.equipment.id);
  }

  openForgeEquipment() {
    const dialogRef = this._dialog.open(ForgeEquipmentDialogComponent, 
      CommonMethods.dialogConfig('420px', 'forge-equipment-dialog', 
        {equipmentToForge: this.equipment, materialsList: this.materialsList}));

    dialogRef.afterClosed().subscribe((equipmentForged: boolean) => {
      // console.log("afterClosed", equipmentForged);
      if (equipmentForged) {
        this.equipmentForged.emit(this.equipment.id);
      }
    });
  }

}
