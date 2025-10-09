import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CampaignQuestCardComponent, CampaignMaterialCardComponent } from '../../shared/components';

import { CampaignMaterialsService, CampaignQuestsService, MaterialsLocalService, QuestsLocalService } from '../../providers';

import { CampaignDto, CampaignMaterialsDto, CampaignQuestsDto, MaterialLocalDto, QuestLocalDto } from '../../models';

import { CommonMethods } from '../../shared/common-methods';

@Component({
  selector: 'app-campaign-detail',
  imports: [
    /*NgIf, NgFor,*/ FormsModule, ReactiveFormsModule, /*KeyValuePipe,*/ RouterModule,
    MatChipsModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, MatToolbarModule,
    CampaignQuestCardComponent, CampaignMaterialCardComponent,
    //TranslatePipe
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
  
  private _questsLocalService = inject(QuestsLocalService);
  private _materialsLocalService = inject(MaterialsLocalService);

  campaignDetail!: CampaignDto;
  campaignQuestsDetail!: CampaignQuestsDto;
  campaignMaterialsDetail!: CampaignMaterialsDto;
  
  questsLocalList: QuestLocalDto[];
  materialsLocalList: MaterialLocalDto[];

  constructor() {
    this.questsLocalList = this._questsLocalService.getAllDto();
    this.materialsLocalList = this._materialsLocalService.getAllDto();
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
    });
  }

  saveCampaignData() {
    Promise.all([
        this._campaignMaterialsService.save(this.campaignMaterialsDetail),
        this._campaignQuestsService.save(this.campaignQuestsDetail),
    ]).then((response) => {
      this._snackBar.open(this._translate.instant("messages.success.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    }).catch((error) => {
      this._snackBar.open(this._translate.instant("messages.error.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    });
  }
}
