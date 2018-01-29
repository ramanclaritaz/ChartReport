import { Component, NgModule } from '@angular/core';
import { single, multi, reportInfo, _reportInfo } from '../data';

@Component({
  selector: 'GridPieChart',
  template: `
    <ngx-charts-pie-grid
      [view]="reportInfo.view"
      [scheme]="reportInfo.colorScheme"
      [results]="reportInfo.single"
      (select)="onSelect($event)">
    </ngx-charts-pie-grid>
  `
})
export class GridPieChart {
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.single = single;
  }
  onSelect(event) {
    console.log(event);
  }

}
