import { inject, Injectable } from "@angular/core";
import { collection, CollectionReference, doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Firestore } from "@angular/fire/firestore";

import { BaseFirebaseMapper } from ".";
import { CampaignHunter, CampaignHunterDto } from "../models";

import { CAMPAIGN_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignHunterMapper extends BaseFirebaseMapper<CampaignHunter, CampaignHunterDto> {

    protected _campaignReference: CollectionReference;

    constructor() {
        super();
        this._campaignReference = collection(inject(Firestore), CAMPAIGN_FIREBASE)
    }

    public dtoToModel( dto: CampaignHunterDto ) : CampaignHunter {
        return {
            ...dto,
            campaign: doc(this._campaignReference, dto.campaign)
        };
    }

    public modelToDto( model: CampaignHunter ) : CampaignHunterDto {
        return {
            ...model,
            campaign: model.campaign?.id
        };
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<CampaignHunter, CampaignHunter>) : CampaignHunter {
        return {
            ...documentData.data(),
            id: documentData.id,
            weaponEquipped: documentData.data().weaponEquipped ?? 0,
            armourHelmEquipped: documentData.data().armourHelmEquipped ?? 0,
            armourChestEquipped: documentData.data().armourChestEquipped ?? 0,
            armourLegEquipped: documentData.data().armourLegEquipped ?? 0,
        };
    }

}