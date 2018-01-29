import {Component, NgModule} from '@angular/core';
import {single, multi, reportInfo, _reportInfo} from '../data';

@Component({
  selector: 'AdvPieChart',
  template: `
    <ngx-charts-advanced-pie-chart
      [view]="reportInfo.view"
      [scheme]="reportInfo.colorScheme"
      [results]="reportInfo.single"
      [gradient]="reportInfo.gradient"
      (select)="onSelect($event)">
    </ngx-charts-advanced-pie-chart>
  `
})
export class AdvPieChart {
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.single = single;
  }
  onSelect(event) {
    console.log(event);
  }

}
