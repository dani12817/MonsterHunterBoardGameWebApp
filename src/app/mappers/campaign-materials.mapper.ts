import { Injectable } from "@angular/core";
import { doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { BaseFirebaseMapper } from ".";
import { CampaignMaterials, CampaignMaterialsDto } from "../models";

import { CAMPAIGN_MATERIALS_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMaterialsMapper extends BaseFirebaseMapper<CampaignMaterials, CampaignMaterialsDto> {

    constructor() {
        super(CAMPAIGN_MATERIALS_FIREBASE);
    }

    public dtoToModel( dto: CampaignMaterialsDto ) : CampaignMaterials {
        return {
            ...dto,
            campaign: doc(this._collectionReference, dto.campaign)
        };
    }

    public modelToDto( model: CampaignMaterials ) : CampaignMaterialsDto {
        return {
            ...model,
            campaign: model.campaign?.id
        };
    }

    public documentDataToModel(documentData: QueryDocumentSnapshot<DocumentData, DocumentData>) : CampaignMaterials {
        return {
            ...documentData.data(),
            id: documentData.id,
        };
    }

}