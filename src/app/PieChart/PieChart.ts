import {Component, NgModule} from '@angular/core';
import {single, multi, _reportInfo, reportInfo} from '../data';

@Component({
  selector: 'PieChart',
  template: `
    <ngx-charts-pie-chart
      [view]="reportInfo.view"
      [scheme]="reportInfo.colorScheme"
      [results]="reportInfo.single"
      [legend]="reportInfo.showLegend"
      [explodeSlices]="reportInfo.explodeSlices"
      [labels]="reportInfo.showLabels"
      [doughnut]="reportInfo.doughnut"
      [gradient]="reportInfo.gradient"
      (select)="onSelect($event)">
    </ngx-charts-pie-chart>
  `
})
export class PieChart {
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.single = single;
  }
  onSelect(event) {
    console.log(event);
  }

}
