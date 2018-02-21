import { Component, Output, EventEmitter, Input } from "@angular/core";
import { sharedData } from "../sharedData/data";
import * as moment from "moment";
import { _searchData } from "../_models/_index";
import { AlertService } from "../_services/_index";



@Component({
  selector: 'app-search',
  templateUrl: "./search.component.html",
})

export class search {
  @Input('searchData') data: _searchData;
  @Output() searchSubmit = new EventEmitter<_searchData>();
  @Output() searchReset = new EventEmitter();
  constructor(private alert: AlertService) {

  }


  validation(): boolean {
    if (this.data.fromDate == undefined || this.data.fromDate == null) {
      this.alert.warn("Please enter valid from date");
      return false;
    }
    else if (this.data.toDate == undefined || this.data.toDate == null) {
      this.alert.warn("Please enter valid to date");
      return false;
    }
    else if (moment(new Date(this.data.fromDate)) > moment(new Date(this.data.toDate))) {
      this.alert.warn("Please enter to date greater than from date ");
      return false;
    }
    return true;
  }
  submit(val: _searchData) {
    if (this.validation()) {
      val.filter = false;
      this.searchSubmit.emit(val);
    }
  }
  reset() {
    this.searchReset.emit();
  }

}

