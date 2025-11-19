import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { MaterialCategory } from '../../../enums';
import { CategoryItem, FilterOption, MaterialFilter } from '../../../../models';
import { FormClass } from '../../../form-class';

@Component({
  selector: 'app-card-dialog',
  imports: [
    RouterModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatDialogModule, MatIcon, MatFormFieldModule, MatCheckboxModule, MatInputModule,
    TranslatePipe
],
  templateUrl: './filter-dialog.component.html'
})
export class FilterDialogComponent {
  readonly dialogRef = inject(MatDialogRef<FilterDialogComponent>);
  readonly data: {option: FilterOption, filter: MaterialFilter} = inject(MAT_DIALOG_DATA);
  private _translateService = inject(TranslateService);
  private _formBuilder = inject(FormBuilder);

  filterForm: FormClass = new FormClass(
      this._formBuilder.group({
        name: new FormControl({value: "", disabled: false}, [Validators.required]),
      })
    );

  readonly categoryList: Map<string, boolean> = new Map();

  constructor() {
    for (const key in MaterialCategory) {
      this.categoryList.set(key, false);
    }

    if (this.data.filter) {
      this._loadEditValues();
    }
  }

  private _loadEditValues() {
    if (this.data.option.type === "contains") {
      this.filterForm.get("name")?.setValue(this.data.filter.value);
    } else {
      for (const category of this.data.filter.value) {
        this.categoryList.set(category, true);
      }
    }
  }

  isValidFilter() {
    return !this.filterForm.formIsInvalid() || this._categorySelected();
  }

  private _categorySelected(): boolean {
    for (const [key, value] of this.categoryList) {
      if (value) {
        return true;
      }
    }

    return false;
  }

  applyFilter() { 
    if (!this.isValidFilter()) {
      return;
    }
  
    this.dialogRef.close(this._getMaterialFilter());
  }

  private _getMaterialFilter(): MaterialFilter {
    let materialFilter: MaterialFilter = {
      option: this.data.option,
      value: undefined,
      string: ""
    };

    if (this.data.option.type === "contains") {
      materialFilter.value = materialFilter.string = this.filterForm.get("name")?.value!.toLocaleLowerCase();
    } else {
      materialFilter.value = [...this.categoryList.entries()].filter(([k,v]) => v).map(([k,v]) => k);
      this._prepareInString(materialFilter);
    }

    return materialFilter;
  }

  private _prepareInString(materialFilter: MaterialFilter) {
    if(!materialFilter.value || materialFilter.value.length == 0) {
      return;
    }

    materialFilter.string = this._translateService.instant(`category.${materialFilter.value[0]}`);

    for (let i = 1; i < materialFilter.value.length; i++) {
      if (i >= 2) {
        materialFilter.string += ` + ${materialFilter.value.length-2} ${this._translateService.instant('filter.more')}`;
        break;
      }
      materialFilter.string += `, ${this._translateService.instant(`category.${materialFilter.value[i]}`)}`;
    }
  }
}