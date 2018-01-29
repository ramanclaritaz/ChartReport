import { Component, NgModule, Input, ViewChild } from '@angular/core';
import { single, multi, _reportInfo, reportInfo, PropertySet, _propertySet } from '../data';
import { Property } from './Property';


@Component({
  selector: 'report',
  templateUrl: "../Reports/ChartReport.html"
})
export class ChartReport {
  reportInfo: _reportInfo
  propertyValue: _propertySet
  // @Input()

  constructor() {
    this.propertyValue = PropertySet;
    this.reportInfo = reportInfo;
    this.reportInfo.title = "Reports"
    this.reportInfo.single = single;

  }
  propertyChange(event: _propertySet) {

    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);

  }
  onSelect(event) {

  }

}
