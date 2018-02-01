import { Component, NgModule, Input, ViewChild } from '@angular/core';
import { single, multi, _reportInfo, reportInfo, PropertySet, _propertySet, mType, sType } from '../sharedData/data';
import { Property } from './Property';
import { Router, ActivatedRoute } from '@angular/router';
import { workedOTStatus } from '../sharedData/workedOverTimeStatus';


@Component({
  selector: 'multireport',
  templateUrl: "../Reports/MultiChartReport.html"
})
export class MultiChartReport {
  reportInfo: _reportInfo
  propertyValue: _propertySet
  // @Input()
  params: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.params = this.route.params;
    this.propertyValue = PropertySet;
    this.propertyValue.typeOfReports = mType
    this.Oninit();
  }
  Oninit() {
    this.route.url.subscribe(val => {
      switch (val[0].path) {
        case "otstatus":
          this.getWorkedStatus(val);
          break;
      }
    });

  }
  getWorkedStatus(val: any[]): any {
    this.reportInfo = reportInfo;
    this.reportInfo.title = "worked over time status";
    this.reportInfo.multi = workedOTStatus;
  }

  propertyChange(event: _propertySet) {

    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);

  }
  onSelect(event) {

  }

}
