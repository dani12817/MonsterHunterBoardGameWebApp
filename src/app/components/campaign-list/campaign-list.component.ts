import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CampaignService, UserService } from '../../providers';
import { CampaignDto, UserDetail } from '../../models';


@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
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

  private filters: any;

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

}
