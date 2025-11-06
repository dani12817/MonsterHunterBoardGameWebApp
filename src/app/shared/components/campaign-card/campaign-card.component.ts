import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CampaignService } from '../../../providers';

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
  private readonly _translateService = inject(TranslateService);
  
  private _campaignService = inject(CampaignService);

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

  deleteCampaign() {
    if(confirm(this._translateService.instant("campaign.confirm.remove"))) {
      this._campaignService.deleteById(this.campaign.id!);
      this.refreshList.emit();
    }
  }
}
