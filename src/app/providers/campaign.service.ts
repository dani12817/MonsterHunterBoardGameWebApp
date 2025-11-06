import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase, CampaignHunterService, CampaignMaterialsService, CampaignQuestsService, UserService } from ".";
import { CampaignMapper } from "../mappers";
import { Campaign, CampaignDto } from "../models";

import { CAMPAIGN_FIREBASE, USER_FIREBASE } from "../shared/constants";
import { collection, doc, QueryConstraint, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends BaseServiceFirebase<Campaign, CampaignDto> {
  private _campaignHunterService = inject(CampaignHunterService);
  private _campaignMaterialsService = inject(CampaignMaterialsService);
  private _campaignQuestsService = inject(CampaignQuestsService);
  private _userService = inject(UserService);

  constructor() {
    super(inject(CampaignMapper), CAMPAIGN_FIREBASE);
  }

  async getAllDtoByUserLogged() {
    let queryConstraints: QueryConstraint[] = [];

    let userLogged = await this._userService.getLoggedInUser();

    if (userLogged) {
      queryConstraints.push(where("admin", "==", 
        doc(collection(this._firestore, USER_FIREBASE), userLogged.id)));
    }

    return this._baseMapper.modelToDtoList(await this.getAll(queryConstraints));
  }

  override async deleteById(id: string) {
    let queryConstraints: QueryConstraint[] = [
      where("campaign", "==", doc(collection(this._firestore, this._collectionName), id))
    ];

    await super.deleteById(id);
    await this._campaignHunterService.deleteByCondition(queryConstraints);
    await this._campaignMaterialsService.deleteByCondition(queryConstraints);
    await this._campaignQuestsService.deleteByCondition(queryConstraints);
  }
}