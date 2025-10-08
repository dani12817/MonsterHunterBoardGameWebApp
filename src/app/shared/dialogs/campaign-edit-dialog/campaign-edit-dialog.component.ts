import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormFieldInputComponent } from '../../components/form-field-input/form-field-input.component';

import { CampaignService, UserService } from '../../../providers';
import { Campaign, CampaignDto, CampaignMaterialsDto, CampaignQuestsDto, UserDetail } from '../../../models';

import { FormClass } from '../../form-class';
import { DEFAULT_DAYS, MAX_QUEST_MISSIONS } from '../../constants';

import { MATERIAL_TABLE, QUEST_TABLE } from '../../../../db';
import { CampaignQuestsService } from '../../../providers/campaign-quests.service';
import { CampaignMaterialsService } from '../../../providers/campaign-materials.service';

@Component({
  selector: 'app-campaign-edit-dialog',
  imports: [
    FormsModule, ReactiveFormsModule, RouterModule,
    MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    FormFieldInputComponent,
    TranslatePipe
  ],
  templateUrl: './campaign-edit-dialog.component.html',
  styleUrl: './campaign-edit-dialog.component.scss'
})
export class CampaignEditDialogComponent {
  private readonly _dialog = inject(MatDialog);
  private _formBuilder = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);
  private _translate = inject(TranslateService);

  private _campaignService = inject(CampaignService);
  private _campaignQuestsService = inject(CampaignQuestsService);
  private _campaignMaterialsService = inject(CampaignMaterialsService);
  private _userService = inject(UserService);
  
  private _loggedInUser: UserDetail | undefined;

  campaignForm: FormClass = new FormClass(
    this._formBuilder.group({
      id: new FormControl({value: null, disabled: false}),
      name: new FormControl({value: '', disabled: false}, [Validators.required]),
      days: new FormControl({value: DEFAULT_DAYS, disabled: false}, [Validators.required]),
      sharedStorage: new FormControl({value: true, disabled: false}, [Validators.required]),
      createdOn: new FormControl({value: new Date(), disabled: false}, [Validators.required]),
    })
  );

  constructor(private dialogRef: MatDialogRef<CampaignEditDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    this._userService.getLoggedInUser().then(loggedInUser => {
      this._loggedInUser = loggedInUser;
    });
  }

  submit() {
    let campaignDetail: CampaignDto = {
      ...this.campaignForm.getValue(),
      admin: this._loggedInUser?.id
    };

    this._campaignService.save(campaignDetail).then(async response => {
      if (campaignDetail.id === null) {
        await this.createCampaignDefaultData(response);
      }

      this.dialogRef.close(response);
    }).catch((err) => {
      console.log(err);
      this._snackBar.open(this._translate.instant("messages.error.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    });
  }

  private async createCampaignDefaultData(campaign: Campaign) {
    await this._campaignQuestsService.save(this.loadCampaignQuestsDefaultData(campaign));
    await this._campaignMaterialsService.save(this.loadCampaignMaterialsDefaultData(campaign));
  }

  private loadCampaignQuestsDefaultData(campaign: Campaign) {
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

  private loadCampaignMaterialsDefaultData(campaign: Campaign) {
    return {
      campaign: campaign.id!,
      materials: Array<number>(MATERIAL_TABLE.length).fill(0)
    };
  }

  get labelTemplate() {
    return "campaign.fields.";
  }

}
