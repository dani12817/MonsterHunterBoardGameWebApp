import { AfterContentInit, AfterViewInit, Component, EventEmitter, inject, Input, Output, Predicate } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FilterDialogComponent } from './dialog/filter-dialog.component';

import { MaterialFilter, FilterOption, MaterialLocalDto } from '../../../models';
import { CommonMethods } from '../../common-methods';

@Component({
  selector: 'material-filter',
  imports: [
    RouterModule, NgIf, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatChipsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    TranslatePipe
  ],
  templateUrl: './material-filter.component.html',
  styleUrl: './material-filter.component.scss'
})
export class MaterialFilterComponent implements AfterViewInit {
  private readonly _dialog = inject(MatDialog);
  readonly filterControl = new FormControl({value: null, disabled: false});

  readonly filterList: MaterialFilter[] = [];

  readonly filterOptions: FilterOption[] = [
    { 
      type: "contains",
      label: "name",
      width: "360px"
    },
    { 
      type: "in",
      label: "category",
      width: "640px"
    },
  ];

  @Input({ required: true }) materialList: MaterialLocalDto[] = [];
  materialFilteredList: MaterialLocalDto[] = [];

  @Output() action = new EventEmitter<MaterialLocalDto[]>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.materialFilteredList = [...this.materialList];
    }, 100);
  }

  openCreateFilter(event: MatAutocompleteSelectedEvent) {
    //console.log("openCreateFilter", event);
    this.openEditFilter(event.option.value);
  }

  openEditFilter(option: FilterOption, filter?: MaterialFilter) {
    const dialogRef = this._dialog.open(FilterDialogComponent, 
      CommonMethods.dialogConfig(option.width, 'create-filter-dialog', {
        option: option, filter: filter
      }));

    dialogRef.afterClosed().subscribe(response => {
      console.log("createFilter", response);
      if (response) {
        this._updateFilterList(response);
        this.filterMaterials();
      }
    });
  }

  removeFilter(index: number) {
    this.filterList.splice(index, 1);
    this.filterMaterials();
  }

  filterMaterials() {
    this.materialFilteredList = this.materialList.filter(this._getFiltroLocalPredicate(this.filterList));
    //console.log("materialFilteredList", this.materialFilteredList);
    this.action.emit();
  }

  clearFilters() {
    this.filterList.length = 0;
    this.filterMaterials();
    this.action.emit(this.materialList);
  }

  private _updateFilterList(filter: MaterialFilter) {
    let index = this.filterList.findIndex(x => x.option.type == filter.option.type);
    if (index >= 0) {
      this.filterList[index] = filter;
    } else {
      this.filterList.push(filter);
    }
  }

  private _getFiltroLocalPredicate(filterList: MaterialFilter[]) {
    let predicates: Predicate<MaterialLocalDto>[] = [];

     for (const filter of filterList) {
      switch (filter.option.type) {
        case 'contains':
          predicates.push((m: MaterialLocalDto) => m.name!.toLocaleLowerCase().includes(filter.value));
          break;
        case 'in':
          predicates.push((m: MaterialLocalDto) => filter.value.includes(m.category!));
          break;
        default:
          predicates.push((m: MaterialLocalDto) => true);
      }
    }

    return (filter: MaterialLocalDto) => predicates.every(predicate => predicate(filter));
  }

}