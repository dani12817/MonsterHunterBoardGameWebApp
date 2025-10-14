
import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { BaseCampaign, CampaignHunterDto, CampaignQuestsDto, WeaponLocalDto } from '../models';

import { ArmourType, MaterialType, WeaponType } from './enums';
import { ASSETS_FOLDER, MAX_QUEST_MISSIONS } from './constants';

import { ARMOUR_TABLE, BASE_ARMOUR_PER_TYPE, MATERIAL_TABLE, QUEST_TABLE, WEAPON_TABLE } from '../../db';

@Injectable()
export class CommonMethods {
    public static dialogConfig(width: string, panelClass: string, data?: any): MatDialogConfig<any> {
        return {width: width, panelClass: panelClass, data: data, disableClose: true}
    }

    public static capitalize(value: string) {
        return value[0].toUpperCase() + value.substring(1).toLowerCase();
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
    

    public static loadCampaignWeaponsDefaultData() {
        return this._fillWithZerosBut(WEAPON_TABLE.get(WeaponType.greatsword)!);
    }

    public static loadCampaignArmoursDefaultData() {
        return this._fillWithZerosBut(ARMOUR_TABLE.get(ArmourType.chest)!, 2);
    }

    private static _fillWithZerosBut(list: any[], lengthNotFilled: number = 1) {
        return Array<number>(lengthNotFilled).fill(1).concat(Array<number>(list.length - lengthNotFilled).fill(0));
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

    public static generateWeaponIcon(weapon: string): string {
        return this.generateWeaponRarityIcon(1, weapon as WeaponType);
        //return `/assets/img/weapon/${weapon}/icon/rarity1.webp`;
    }

    public static generateWeaponRarityIcon(rarity: number, weaponType: WeaponType): string {
        return `/assets/img/weapon/${weaponType}/icon/rarity${rarity}.webp`;
    }

    public static generateWeaponImage(weapon: string, rarity: number, weaponType: WeaponType): string {
        return `/assets/img/weapon/${weaponType}/${weapon}_rarity${rarity}.jpg`;
    }

    public static generateArmourIcon(armourType: ArmourType): string {
        return this.generateArmourRarityIcon(1, armourType);
    }

    public static generateArmourRarityIcon(rarity: number, armourType: ArmourType): string {
        return `/assets/img/armour/${armourType}/icon/rarity${rarity}.webp`;
    }

    public static generateArmourImage(armour: string, armourType: ArmourType): string {
        return `/assets/img/armour/${armourType}/${armour}.jpg`;
    }

    public static getBaseArmour(weaponType: WeaponType) {
        return BASE_ARMOUR_PER_TYPE.get(weaponType) ?? 0
    }
    
    public static unsorted(a: any, b: any): number { return 0; }

}