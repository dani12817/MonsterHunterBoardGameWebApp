import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CampaignDto } from '../../../models';

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
  @Input({ required: true }) campaign!: CampaignDto;
  //@Input() userLogged!: UserDetail;

}
