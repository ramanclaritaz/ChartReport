import { Component, NgModule, Input, ViewChild, ElementRef, Inject, style, OnInit } from '@angular/core';
import { sharedData, _reportInfo, _propertySet } from '../sharedData/data';
import { Property } from './Property';
import { Router, ActivatedRoute } from '@angular/router';
import { commonServices } from '../sharedData/common.service';
import { httpService } from '../httpService';
import { timeOfficeService } from '../sharedData/timeOffice.service';


@Component({
  selector: 'report',
  templateUrl: "../Reports/SingleChartReport.html"

})
export class ChartReport implements OnInit {
  // @ViewChild('reportData') element: ElementRef;
  reportInfo: _reportInfo
  propertyValue: _propertySet
  searchData: any;
  params: any;
  result: any;
  single: any[];
  constructor(private router: Router, private route: ActivatedRoute, @Inject(commonServices) private commonservice: commonServices, private http: httpService, @Inject(timeOfficeService) private timeOffice: timeOfficeService, private com: sharedData) {
    this.params = this.route.params;
    this.propertyValue = com.PropertySet;
    this.propertyValue.typeOfReports = com.ListsType;
    this.propertyValue.typeOfExports = com.ListTypeOfExport;
    this.reportInfo = this.com.ReportInfo;
    this.propertyValue.graph = true;
  }
  ngOnInit() {
    this.route.url.subscribe(val => {
      switch (val[0].path) {
        case "availableleave":
          this.getAvailableLeave(val);
          break;
        case "leavestatus":
          this.getLeaveAppliedStatus(val);
          break;
      }
    });

  }
  getLeaveAppliedStatus(val: any[]): any {
    if (val.length > 3) {
      this.searchData = { 'empNo': val[1].path, 'fromDate': val[2].path, 'toDate': val[3].path };
      this.timeOffice.getLeaveStatus(this.searchData).subscribe((res: any) => {
        this.result = res.result;
        this.reportInfo.title = "Available leaves"
        this.reportInfo.single = res.data;
      });
    }
  }
  getAvailableLeave(val: any[]) {
    this.searchData.employeeNumber = val[1].path;
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


}
