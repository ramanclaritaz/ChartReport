import { Component, Output, EventEmitter, Input } from "@angular/core";
import { sharedData, _operators, operators } from "../sharedData/data";
import { } from '@angular/forms'
import * as moment from "moment";
import { _searchData } from "../_models/_index";
import { AlertService } from "../_services/_index";
import { _displayProperty, propsType } from "../_models/displayProperty";



@Component({
  selector: 'app-search',
  templateUrl: "./search.component.html",
})

export class search {
  opertorsList: _operators[];
  visibilty: number;
  @Input('searchData') Data: _searchData;
  @Output() searchSubmit = new EventEmitter<_searchData>();
  @Output() searchReset = new EventEmitter();
  constructor(private alert: AlertService) {

    this.opertorsList = operators;
  }

  validation(): boolean {
    return true;
  }
  submit(val: _searchData) {
    if (this.validation()) {
      this.searchSubmit.emit(val);
    }
  }
  reset() {
    this.searchReset.emit();
  }
  operatorChange() {
    this.Data.headerList.forEach((val) => {
      if (val.index == this.Data.selectedField) {
        if (val.propertyType == propsType.isString) {
          this.visibilty = 1;
        } else if (val.propertyType == propsType.isNumber) {
          this.visibilty = 2;
        }
        else if (val.propertyType == propsType.isDate && this.Data.selectedOpertor != 4 && this.Data.selectedOpertor != 5) {
          this.visibilty = 3;
        } else if (val.propertyType == propsType.isDate && (this.Data.selectedOpertor == 4 || this.Data.selectedOpertor == 5)) {
          this.visibilty = 4;
        }
      }
    })
  }
  headerChange() {
    this.Data.headerList.forEach((val) => {
      if (val.index == this.Data.selectedField)
        if (val.propertyType == propsType.isDate) {
          this.opertorsList = operators;
        }
        else {
          this.opertorsList = operators.filter((val) => {
            if (val.view != "date")
              return val;
          });
        }
    })


  }

}

