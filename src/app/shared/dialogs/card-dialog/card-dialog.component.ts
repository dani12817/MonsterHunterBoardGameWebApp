import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseEquipmentDto, MaterialCraftDto } from '../../../models';
import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'app-card-dialog',
  imports: [
    RouterModule,
    MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    TranslatePipe
],
  templateUrl: './card-dialog.component.html',
  styleUrl: './card-dialog.component.scss'
})
export class CardDialogComponent {
  title: string;
  cardToShow: string;
  
  materialsList?: MaterialCraftDto[];

  constructor(private dialogRef: MatDialogRef<CardDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    // console.log("equipment", this.data);
    if (this.data.monsterType) {
      this.title = "campaign.monster.material.sheet";
      this.cardToShow = CommonMethods.generateMonsterRewardImage(this.data.monsterType);
    } else {
      this.title = "card.title";
      this.cardToShow = this.data.equipment.image;

        if (this.data.showMaterials && this.data.equipment.materials) {
          this.prepareEquipmentMaterials(this.data.equipment);
        }
    }
  }

  private prepareEquipmentMaterials(equipmentDto: BaseEquipmentDto) {
    this.materialsList = equipmentDto.materials;
  }

}
