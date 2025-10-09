import { inject, Injectable } from "@angular/core";
import { collection, CollectionReference, doc, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Firestore } from "@angular/fire/firestore";

import { BaseFirebaseMapper } from ".";
import { CampaignMaterials, CampaignMaterialsDto } from "../models";

import { CAMPAIGN_FIREBASE } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class CampaignMaterialsMapper extends BaseFirebaseMapper<CampaignMaterials, CampaignMaterialsDto> {

    protected _campaignReference: CollectionReference;

    constructor() {
        super();
        this._campaignReference = collection(inject(Firestore), CAMPAIGN_FIREBASE)
    }

    public dtoToModel( dto: CampaignMaterialsDto ) : CampaignMaterials {
        return {
            ...dto,
            campaign: doc(this._campaignReference, dto.campaign)
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
            materials: documentData.data()["materials"] ?? [],
            id: documentData.id,
        };
    }

}