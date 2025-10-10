import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CampaignHunterService } from '../providers';
import { CampaignHunterDto } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CampaignHunterResolverService implements Resolve<CampaignHunterDto[]> {
  private _campaignHunterService = inject(CampaignHunterService)

  resolve(route: ActivatedRouteSnapshot): Promise<CampaignHunterDto[]> {
    return this._campaignHunterService.getAllDtoByCampaignId(route.paramMap.get('uid')!);
  }
}
