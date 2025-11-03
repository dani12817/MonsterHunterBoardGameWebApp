import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { CardDialogComponent } from '../../dialogs';

import { BaseEquipmentDto } from '../../../models';
import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'base-equipment',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    TranslatePipe
  ],
  templateUrl: './base-equipment.component.html',
  styleUrl: './base-equipment.component.scss'
})
export class BaseEquipmentCardComponent {
  protected readonly _dialog = inject(MatDialog);

  @Input({ required: true }) equipment!: BaseEquipmentDto;

  openCardDetail() {
    this._dialog.open(CardDialogComponent, 
      CommonMethods.dialogConfig('420px', 'card-dialog', 
        { equipment: this.equipment }));
  }
}
