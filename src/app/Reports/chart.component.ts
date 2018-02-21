import { Component, NgModule, Input, ViewChild, ElementRef, Inject, style, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { _reportInfo, _propertySet, _searchData } from '../_models/_index';
import { commonServices, httpService, timeOfficeService } from '../_services/_index';
import { sharedData } from '../sharedData/data';
import { forEach } from '@angular/router/src/utils/collection';
import * as moment from "moment";


@Component({
  selector: 'report',
  templateUrl: "../Reports/chart.component.html"

})
export class chartComponent implements OnInit {

  reportInfo: _reportInfo
  propertyValue: _propertySet
  searchData: _searchData;
  isSingle: boolean;
  showFilter: boolean;
  params: any;
  result: any;
  single: any[];
  constructor(private router: Router, private route: ActivatedRoute, @Inject(commonServices) private commonservice: commonServices, private http: httpService, @Inject(timeOfficeService) private timeOffice: timeOfficeService, private com: sharedData) {
    this.params = this.route.params;
    this.propertyValue = this.com.PropertySet;
    this.propertyValue.typeOfExports = this.com.loadtypeOfExports(true);
    this.reportInfo = this.com.ReportInfo;
    this.propertyValue.graph = true;
    this.isSingle = true;
  }
  ngOnInit() {

    this.route.url.subscribe(val => {
      this.result = false;
      this.setSearchData(JSON.stringify(val));
      // this.searchData.filter = false;
      this.params = val[0].path
      this.callBack(this.params);

    });


  }

  callBack(val: string) {
    switch (val) {
      case "availableleave":
        this.showFilter = false;
        this.getAvailableLeave();
        this.propertyValue.typeOfReports = this.com.ListsType;
        break;
      case "leavestatus":
        this.showFilter = true;
        this.getLeaveAppliedStatus();
        this.propertyValue.typeOfReports = this.com.ListsType;
        break;
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
  getLeaveAppliedStatus() {
    this.timeOffice.getLeaveStatus(this.searchData).subscribe((res: any) => {
      this.result = res.result;
      this.reportInfo.title = "Available leaves"
      this.reportInfo.single = res.data;
    });
  }
  getAvailableLeave() {

    this.timeOffice.getAvailableLeave(this.searchData).subscribe((res: any) => {
      this.result = res.result;
      this.reportInfo.title = "Applied leave status"
      this.reportInfo.single = res.data;

    });
  }
  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event: number) {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title)
    }
  }
  submit(event: _searchData) {
    this.searchData = event;
    this.callBack(this.params);
  }

  reset() {
    this.ngOnInit();
  }


}
