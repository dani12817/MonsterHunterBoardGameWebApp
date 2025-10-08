import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormClass } from '../../form-class';

@Component({
  selector: 'app-form-field-input',
  imports: [
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    TranslatePipe
  ],
  templateUrl: './form-field-input.component.html'
})
export class FormFieldInputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) fieldName!: string;
  @Input() type: string = 'text';
  @Input({ required: true }) formClass!: FormClass;

  @Input() showHint: boolean = false;

  get labelName() {
    return this.label + this.fieldName;
  }

}
