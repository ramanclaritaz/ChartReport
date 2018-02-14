import { Component, NgModule, Input, ViewChild } from '@angular/core';
import {  _reportInfo, _propertySet, sharedData } from '../sharedData/data';
import { Property } from './Property';
import { Router, ActivatedRoute } from '@angular/router';
import { commonServices } from '../sharedData/common.service';


@Component({
  selector: 'multireport',
  templateUrl: "../Reports/MultiChartReport.html",
providers:[commonServices]
})
export class MultiChartReport {
  reportInfo: _reportInfo
  propertyValue: _propertySet
  // @Input()
  params: any;
  constructor(private router: Router, private route: ActivatedRoute,private commonservice:commonServices,private sharedData:sharedData) {
    this.params = this.route.params;
    this.propertyValue = this.sharedData.PropertySet;
    this.propertyValue.typeOfReports = this.sharedData.ListsType
    this.propertyValue.graph = false;
    this.propertyValue.typeOfExports = this.sharedData.ListTypeOfExport;
    this.reportInfo = this.sharedData.ReportInfo;
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
    this.reportInfo.title = "worked over time status";
  }

  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event:number)
  {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title)
    }
  }

}
