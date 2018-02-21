import { Component, OnInit } from '@angular/core';
import { sharedData } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { retry } from 'rxjs/operators/retry';
import { commonServices } from '../_services/_index';
import { _propertySet, _reportInfo, _searchData } from '../_models/_index';


@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html",
  providers: [commonServices]
})
export class RecordReport implements OnInit {
  holiday: any[];
  reportInfo: _reportInfo;
  paramId: any;
  params: any;
  propertyValue: _propertySet;
  searchData:_searchData;
  constructor(private route: ActivatedRoute, private router: Router, private commonservice: commonServices, private comVar: sharedData) {

  }

  ngOnInit()
  {
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
  setSearchData(val: any) {
    var obj = JSON.parse(val);
    let data: _searchData = { filter: true }
    for (let i = 0; i < obj.length; i++) {
      if (i == 1)
        data.empNo = obj[i].path;
      else if (i == 2)
        data.fromDate = obj[i].path;
      else if (i == 3)
        data.toDate = obj[i].path;
      else if (i == 4)
        data.approverNo = obj[i].path;
    }
    this.searchData = data;

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
