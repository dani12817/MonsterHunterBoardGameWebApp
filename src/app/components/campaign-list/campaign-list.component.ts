import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CampaignCardComponent } from '../../shared/components/campaign-card/campaign-card.component';

import { CampaignService, UserService } from '../../providers';
import { CampaignDto, UserDetail } from '../../models';

import { CampaignEditDialogComponent } from '../../shared/dialogs';
import { CommonMethods } from '../../shared/common-methods';

@Component({
  selector: 'app-campaign-list',
  imports: [
    RouterModule, NgFor,
    MatButtonModule, MatIconModule,
    CampaignCardComponent
  ],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.scss'
})
export class CampaignListComponent {
  private readonly _dialog = inject(MatDialog);

  private _userService = inject(UserService);
  private _campaignService = inject(CampaignService);

  campaignList: CampaignDto[] = [];
  userLogged!: UserDetail;

  constructor() {
    this._userService.getLoggedInUser().then(async response => {
      this.userLogged = response!;
      this.searchDoujinshi();
    });
  }

  private searchDoujinshi() {
    this._campaignService.getAllDto().then(data => {
      console.log("getAllDto", data);
      this.campaignList = data;
      //data[0].artist.get().then((result: Artist) => console.log("artist", result))
    });
  }

  openNewCampaign() {
    const dialogRef = this._dialog.open(CampaignEditDialogComponent, 
      CommonMethods.dialogConfig('420px', 'campaign-edit-dialog'));

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.searchDoujinshi();
      }
    });
  }

}
