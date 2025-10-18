import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { KeyValuePipe, NgFor, NgIf } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { 
  CampaignQuestCardComponent, CampaignMaterialCardComponent, 
  EquipmentCardComponent, BaseEquipmentCardComponent 
} from '../../shared/components';
import { CampaignHunterEditDialogComponent } from '../../shared/dialogs';

import { 
  CampaignMaterialsService, CampaignQuestsService, 
  MaterialLocalService, QuestLocalService, WeaponLocalService, ArmourLocalService,
  CampaignHunterService
} from '../../providers';

import { 
  CampaignDto, 
  CampaignHunterDto, CampaignMaterialsDto, CampaignQuestsDto, 
  MaterialLocalDto, QuestLocalDto, 
  BaseCampaignHunterKeys, WeaponLocalDto, ArmourLocalDto
} from '../../models';

import { CommonMethods } from '../../shared/common-methods';
import { ArmourType, WeaponType } from '../../shared/enums';
import { BASE_ARMOUR_PER_TYPE } from '../../../db';
import { MAX_HUNTERS_PER_CAMPAIGN } from '../../shared/constants';

@Component({
  selector: 'app-campaign-detail',
  imports: [
    NgIf, /*NgFor,*/ FormsModule, ReactiveFormsModule, /*KeyValuePipe,*/ RouterModule,
    MatChipsModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, MatToolbarModule, MatTabsModule,
    CampaignQuestCardComponent, CampaignMaterialCardComponent, BaseEquipmentCardComponent, EquipmentCardComponent,
    TranslatePipe, KeyValuePipe
  ],
  templateUrl: './campaign-detail.component.html',
  styleUrl: './campaign-detail.component.scss'
})
export class CampaignDetailComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);
  private _translate = inject(TranslateService);

  private _campaignMaterialsService = inject(CampaignMaterialsService);
  private _campaignQuestsService = inject(CampaignQuestsService);
  private _campaignHunterService = inject(CampaignHunterService);
  
  private _questLocalService = inject(QuestLocalService);
  private _materialLocalService = inject(MaterialLocalService);
  private _weaponLocalService = inject(WeaponLocalService);
  private _armourLocalService = inject(ArmourLocalService);

  campaignDetail!: CampaignDto;
  campaignQuestsDetail!: CampaignQuestsDto;
  campaignMaterialsDetail!: CampaignMaterialsDto;
  campaignHunterList!: CampaignHunterDto[];
  
  questLocalList: QuestLocalDto[];
  materialLocalList: MaterialLocalDto[];
  weaponsLocalMap: Map<WeaponType, (WeaponLocalDto | undefined)[]>;
  armoursLocalMap: Map<ArmourType, (ArmourLocalDto | undefined)[]>;

  commonMethods = CommonMethods;
  baseCampaignHunterKeys = BaseCampaignHunterKeys;
  armourTypeKeys = ArmourType;

  MAX_HUNTERS_PER_CAMPAIGN = MAX_HUNTERS_PER_CAMPAIGN;

  constructor() {
    this.questLocalList = this._questLocalService.getAllDto();
    this.materialLocalList = this._materialLocalService.getAllDto();
    this.weaponsLocalMap = this._weaponLocalService.getAllDto();
    this.armoursLocalMap = this._armourLocalService.getAllDto();
    //console.log("armoursLocalMap", this.armoursLocalMap);
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe((routeData: any) => {
      //console.log("activatedRoute", routeData);
      if (routeData.campaignData) {
        this.campaignDetail = routeData.campaignData;
      }

      this.campaignQuestsDetail = routeData.campaignQuestsData 
        ?? CommonMethods.loadCampaignQuestsDefaultData(this.campaignDetail);

      this.campaignMaterialsDetail = routeData.campaignMaterialsData 
        ?? CommonMethods.loadCampaignMaterialsDefaultData(this.campaignDetail);

      this.campaignHunterList = routeData.campaignHuntersData ?? [];
    });
  }

  showArmour(armourHelm: ArmourLocalDto, campaignHunter: CampaignHunterDto) {
    if (armourHelm.base) {
      return BASE_ARMOUR_PER_TYPE.get(campaignHunter.weaponType) == armourHelm.id;
    }
    return true;
  }

  openNewCampaignHunter(campaignHunter?: CampaignHunterDto, hunterIndex: number = -1) {
    const dialogRef = this._dialog.open(CampaignHunterEditDialogComponent, 
      CommonMethods.dialogConfig('420px', 'campaign-hunter-edit-dialog',
        {campaignId: this.campaignDetail.id, hunter: campaignHunter}));

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        if (hunterIndex >= 0) {
          this.campaignHunterList[hunterIndex] = response;
        } else {
          this.campaignHunterList.push(response);
        }
        
        this._snackBar.open(this._translate.instant("messages.success.hunter"),
          this._translate.instant("actions.close"), {duration: 5000});
        }
    });
  }

  getWeaponFromCampaignHunter(campaignHunter: CampaignHunterDto) {
    return this.weaponsLocalMap.get(campaignHunter.weaponType)![campaignHunter.weaponEquipped]!;
  }

  getArmourFromCampaignHunter(campaignHunter: CampaignHunterDto, armourType: ArmourType) {
    return this.armoursLocalMap.get(armourType)![campaignHunter[`armour${CommonMethods.capitalize(armourType)}Equipped`]]!;
  }

  changeEquipped(equipment: number, campaignHunter: CampaignHunterDto, campaignHunterKey: BaseCampaignHunterKeys) {
    campaignHunter[campaignHunterKey] = equipment;
    this._snackBar.open(this._translate.instant("messages.success.equip"),
      this._translate.instant("actions.close"), {duration: 5000});
  }

  equipmentForged(equipment: number, campaignHunter: CampaignHunterDto, campaignHunterKey: BaseCampaignHunterKeys) {
    campaignHunter[campaignHunterKey][equipment] = 1;
    this._snackBar.open(this._translate.instant("messages.success.forged"),
      this._translate.instant("actions.close"), {duration: 5000});
  }

  saveCampaignData() {
    Promise.all([
        this._campaignMaterialsService.save(this.campaignMaterialsDetail),
        this._campaignQuestsService.save(this.campaignQuestsDetail),
        this._campaignHunterService.saveAll(this.campaignHunterList)
    ]).then((response) => {
      this._snackBar.open(this._translate.instant("messages.success.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    }).catch((error) => {
      this._snackBar.open(this._translate.instant("messages.error.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    });
  }
}
