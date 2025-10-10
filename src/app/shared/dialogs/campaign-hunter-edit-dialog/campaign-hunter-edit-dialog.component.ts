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

import { FormFieldInputComponent, FormFieldSelectComponent } from '../../components';

import { CampaignHunterService } from '../../../providers';
import { CampaignHunterDto } from '../../../models';

import { FormClass } from '../../form-class';
import { CommonMethods } from '../../common-methods';
import { WeaponType } from '../../enums';

@Component({
  selector: 'app-campaign-hunter-edit-dialog',
  imports: [
    FormsModule, ReactiveFormsModule, RouterModule,
    MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatDialogModule, MatIcon, MatToolbarModule,
    FormFieldInputComponent, FormFieldSelectComponent,
    TranslatePipe
  ],
  templateUrl: './campaign-hunter-edit-dialog.component.html',
  styleUrl: './campaign-hunter-edit-dialog.component.scss'
})
export class CampaignHunterEditDialogComponent {
  private readonly _dialog = inject(MatDialog);
  private _formBuilder = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);
  private _translate = inject(TranslateService);

  private _campaignHunterService = inject(CampaignHunterService);

  wyeponTypeList = Object.values(WeaponType);

  campaignHunterForm: FormClass = new FormClass(
    this._formBuilder.group({
      id: new FormControl({value: null, disabled: false}),
      name: new FormControl({value: '', disabled: false}, [Validators.required]),
      weaponType: new FormControl({value: WeaponType.greatsword, disabled: false}, [Validators.required]),
    })
  );

  constructor(private dialogRef: MatDialogRef<CampaignHunterEditDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log("camapignId", this.data);
  }

  submit() {
    let campaignHunterDetail: CampaignHunterDto = this.prepareCampaignHunter();

    this._campaignHunterService.saveDto(campaignHunterDetail).then(response => {
      this.dialogRef.close(response);
    }).catch((err) => {
      console.log(err);
      this._snackBar.open(this._translate.instant("messages.error.save"),
        this._translate.instant("actions.close"), {duration: 5000});
    });
  }

  private prepareCampaignHunter(): CampaignHunterDto {
    return {
      ...this.campaignHunterForm.getValue(),
      campaign: this.data.campaignId,
      weaponEquipped: 1,
      armourHeadEquipped: 1,
      armourChestEquipped: 1,
      armourLegEquipped: 1,
      weapons: CommonMethods.loadCampaignWeaponsDefaultData(),
      armoursHead: CommonMethods.loadCampaignArmoursDefaultData(),
      armoursChest: CommonMethods.loadCampaignArmoursDefaultData(),
      armoursLeg: CommonMethods.loadCampaignArmoursDefaultData(),
    };
  }

  get labelTemplate() {
    return "campaignHunter.fields.";
  }

}
