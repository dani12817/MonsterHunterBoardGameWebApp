import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CampaignEditDialogComponent } from '../../dialogs';

import { CampaignDto } from '../../../models';

import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'campaign-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    TranslatePipe, DatePipe
  ],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.scss'
})
export class CampaignCardComponent {
  private readonly _dialog = inject(MatDialog);

  @Input({ required: true }) campaign!: CampaignDto;
  @Output() refreshList = new EventEmitter<void>();

  openDetail() {
    const dialogRef = this._dialog.open(CampaignEditDialogComponent, 
      CommonMethods.dialogConfig('420px', 'campaign-edit-dialog',{ campaignId: this.campaign.id }));

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.refreshList.emit();
      }
    });
  }
}
