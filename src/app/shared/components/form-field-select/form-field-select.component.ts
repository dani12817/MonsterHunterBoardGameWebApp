import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormClass } from '../../form-class';

@Component({
  selector: 'app-form-field-select',
  imports: [
    NgFor, NgIf,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    TranslatePipe
  ],
  templateUrl: './form-field-select.component.html'
})
export class FormFieldSelectComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) fieldName!: string;
  @Input({ required: true }) formClass!: FormClass;
  @Input({ required: true }) itemList!: string[];
  @Input({ required: true }) itemLabelBase!: string;
  @Input() emptyOption: boolean = true;

  get labelName() {
    return this.label + this.fieldName;
  }

}
