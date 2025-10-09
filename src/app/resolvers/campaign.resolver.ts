import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CampaignService } from '../providers';
import { CampaignDto } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CampaignResolverService implements Resolve<CampaignDto> {
  private _campaignService = inject(CampaignService)

  resolve(route: ActivatedRouteSnapshot): Promise<CampaignDto> {
    return this._campaignService.getDtoById(route.paramMap.get('uid')!);
  }
}
