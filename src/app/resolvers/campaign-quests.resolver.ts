import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CampaignQuestsService } from '../providers';
import { CampaignQuestsDto } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CampaignQuestsResolverService implements Resolve<CampaignQuestsDto | undefined> {
  private _campaignQuestsService = inject(CampaignQuestsService)

  resolve(route: ActivatedRouteSnapshot): Promise<CampaignQuestsDto | undefined> {
    return this._campaignQuestsService.getDtoByCampaignId(route.paramMap.get('uid')!);
  }
}
