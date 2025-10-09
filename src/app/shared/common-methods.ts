
import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { BaseCampaign, CampaignQuestsDto } from '../models';

import { MaterialType } from './enums';
import { ASSETS_FOLDER, MAX_QUEST_MISSIONS } from './constants';

import { MATERIAL_TABLE, QUEST_TABLE } from '../../db';

@Injectable()
export class CommonMethods {
    public static dialogConfig(width: string, panelClass: string, data?: any): MatDialogConfig<any> {
        return {width: width, panelClass: panelClass, data: data, disableClose: true}
    }

    public static loadCampaignQuestsDefaultData<T extends BaseCampaign>(campaign: T) {
        let campaignQuestsDetail: CampaignQuestsDto = {
            campaign: campaign.id!,
            quests: []
        };
    
        for (const quest of QUEST_TABLE) {
            let questMission: any = {};
            for (const mission of quest.quests) {
            questMission['stars'+mission.stars] = MAX_QUEST_MISSIONS;
            }
            campaignQuestsDetail.quests?.push(questMission);
        }
        
        return campaignQuestsDetail;
    }

    public static loadCampaignMaterialsDefaultData<T extends BaseCampaign>(campaign: T) {
        return {
            campaign: campaign.id!,
            materials: Array<number>(MATERIAL_TABLE.length).fill(0)
        };
    }

    public static generateMonsterName(monster: string): string {
        return `monster.${monster}`;
    }

    public static generateMonsterIcon(monster: string): string {
        return `${ASSETS_FOLDER}/monster/icons/${monster}.webp`;
    }

    public static generateMonsterImage(monster: string): string {
        return `${ASSETS_FOLDER}/monster/${monster}.webp`;
    }

    public static generateQuestIcon(monster: string): string {
        return `${ASSETS_FOLDER}/quest/${monster}.png`;
    }

    public static generateMaterialName(material: string): string {
        return `material.${material}`;
    }

    public static generateMaterialIcon(material: string, type: MaterialType): string {
        return `${ASSETS_FOLDER}/material/${type}/icon/${material}.png`;
    }

    public static generateMaterialImage(material: string, type: MaterialType): string {
        return `${ASSETS_FOLDER}/material/${type}/${material}.webp`;
    }

}