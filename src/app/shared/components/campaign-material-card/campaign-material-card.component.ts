import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CampaignMaterialsDto, MaterialLocalDto } from '../../../models';

@Component({
  selector: 'campaign-material-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    //TranslatePipe
  ],
  templateUrl: './campaign-material-card.component.html',
  styleUrl: './campaign-material-card.component.scss'
})
export class CampaignMaterialCardComponent {
  @Input({ required: true }) materialLocal!: MaterialLocalDto;
  @Input({ required: true }) campaignMaterial!: CampaignMaterialsDto;
  @Input({ required: true }) index!: number;

  changeMaterial(value: number) {
    if (this.campaignMaterial.materials[this.index] > 0 || value > 0) {
      this.campaignMaterial.materials[this.index] = this.campaignMaterial.materials[this.index] + value;
    }
  }

}
