import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormFieldSelectComponent } from '../form-field-select/form-field-select.component';

import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'app-form-field-select-weapon',
  imports: [
    NgFor, NgIf,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    TranslatePipe
  ],
  templateUrl: './form-field-select-weapon.component.html'
})
export class FormFieldSelectWeaponComponent extends FormFieldSelectComponent {

  weaponIcon(weapon: string) {
    return CommonMethods.generateWeaponIcon(weapon);
  }

}
