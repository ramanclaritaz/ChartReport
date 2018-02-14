import { Component } from '@angular/core';
import { _reportInfo, sharedData, _propertySet } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { retry } from 'rxjs/operators/retry';
import { commonServices } from '../sharedData/common.service';


@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html",
  providers: [commonServices]
})
export class RecordReport {
  holiday: any[];
  reportInfo: _reportInfo;
  paramId: any;
  params: any;
  propertyValue: _propertySet;
  constructor(private route: ActivatedRoute, private router: Router, private commonservice: commonServices, private comVar: sharedData) {

    this.params = this.route.params;
  }
  Oninit() {
    this.propertyValue = this.comVar.PropertySet;
    this.propertyValue.typeOfReports = this.comVar.ListsType
    this.propertyValue.graph = false;
    this.propertyValue.typeOfExports = this.comVar.ListTypeOfExport;
    this.reportInfo = this.comVar.ReportInfo;
    this.route.url.subscribe((val) => {
      this.params = val;
      this.paramId = val[0].path;
    });
    if (this.paramId == 'holidaylist') {
      this.reportInfo.title = "Holiday List"
    }
    else if (this.paramId == 'attendance') {
      this.reportInfo.title = "Attendance report from ( " + this.params[1].path + " to " + this.params[2].path + " )";
    }
  }
  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event: number) {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title, "", this.holiday)
    }
  }
}
