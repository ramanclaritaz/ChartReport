import { Component, NgModule, Input, ViewChild } from '@angular/core';
import { _reportInfo, PropertySet, _propertySet, sType, reportInfo } from '../sharedData/data';
import { Property } from './Property';
import { Router, ActivatedRoute } from '@angular/router';
import { availableLeaves } from '../sharedData/availableLeaves';
import { leaveAppliedStatus } from '../sharedData/leaveAppliedStatus';


@Component({
  selector: 'report',
  templateUrl: "../Reports/SingleChartReport.html"
})
export class ChartReport {

  reportInfo: _reportInfo
  propertyValue: _propertySet
  params: any;
  constructor(
    private router: Router, private route: ActivatedRoute
  ) {
    this.params = this.route.params;
    this.propertyValue = PropertySet;
    this.propertyValue.typeOfReports = sType
    this.Oninit();
  }
  Oninit() {
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
  getAvailableLeave(val: any[]): any {
    let data = availableLeaves.filter((s) => {
      if (s.employeeNumber == val[1].path) {
        return s;
      }
    });
    var single = [];
    single.push({ name: "casual", value: data[0]['casualLeave'] });
    single.push({ name: "condolence", value: data[0]['condolenceLeaves'] });
    single.push({ name: "maternity", value: data[0]['maternityLeave'] });
    single.push({ name: "privilege", value: data[0]['privilegeLeave'] });
    single.push({ name: "sick", value: data[0]['sickLeave'] });
    this.reportInfo = reportInfo;
    this.reportInfo.title = "Available leaves"
    this.reportInfo.single = single;
  }
  getLeaveAppliedStatus(val: any[]) {
    var data = leaveAppliedStatus.filter((s) => {
      if (s.employeeNumber == val[1].path) {
        return s;
      }
    });
    this.reportInfo = reportInfo;
    this.reportInfo.title = "Applied leave status"
    this.reportInfo.single = data;
  }
  propertyChange(event: _propertySet) {

    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);

  }


}
