import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CampaignMaterialsService } from '../providers';
import { CampaignMaterialsDto } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CampaignMaterialsResolverService implements Resolve<CampaignMaterialsDto | undefined> {
  private _campaignMaterialsService = inject(CampaignMaterialsService)

  resolve(route: ActivatedRouteSnapshot): Promise<CampaignMaterialsDto | undefined> {
    return this._campaignMaterialsService.getDtoByCampaignId(route.paramMap.get('uid')!);
  }
}
