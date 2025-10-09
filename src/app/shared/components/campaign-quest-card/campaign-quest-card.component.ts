import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CampaignQuestsDto, QuestLocalDto } from '../../../models';

@Component({
  selector: 'campaign-quest-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    TranslatePipe
  ],
  templateUrl: './campaign-quest-card.component.html',
  styleUrl: './campaign-quest-card.component.scss'
})
export class CampaignQuestCardComponent {
  @Input({ required: true }) questLocal!: QuestLocalDto;
  @Input({ required: true }) campaignQuest?: any;
  //@Input() userLogged!: UserDetail;

  changeQuest(quest: string, value: number) {
    if (this.campaignQuest[quest] > 0 || value > 0) {
      this.campaignQuest[quest] = this.campaignQuest[quest] + value;
    }
  }

}
