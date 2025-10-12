import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseEquipmentDto } from '../../../models';

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
  equipmentToForge: BaseEquipmentDto;

  constructor(private dialogRef: MatDialogRef<CardDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    // console.log("equipmentToForge", this.data);
    this.equipmentToForge = this.data.equipmentToForge;
  }

}
