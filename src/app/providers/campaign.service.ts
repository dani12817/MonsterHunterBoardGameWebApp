import { inject, Injectable } from "@angular/core";

import { BaseServiceFirebase, UserService } from ".";
import { CampaignMapper } from "../mappers";
import { Campaign, CampaignDto } from "../models";

import { CAMPAIGN_FIREBASE, USER_FIREBASE } from "../shared/constants";
import { collection, doc, getDocs, query, QueryConstraint, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends BaseServiceFirebase<Campaign, CampaignDto> {
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
}