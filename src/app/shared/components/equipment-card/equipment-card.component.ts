import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { WeaponLocalDto } from '../../../models';

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
export class EquipmentCardComponent {
  @Input({ required: true }) equipment!: WeaponLocalDto;
  @Input({ required: true }) hunterEquipmentEquipped!: number;
  @Input({ required: true }) hunterEquipmentList!: number[];
  @Input({ required: true }) equipmentIndex!: number;

  isForged() {
    return !!this.hunterEquipmentList[this.equipmentIndex];
  }

  isEquipped() {
    return this.hunterEquipmentEquipped - 1 === this.equipmentIndex;
  }

  canBeForged() {
    return !this.equipment.previous || !!this.hunterEquipmentList[this.equipment.previous! - 1];
  }

}
