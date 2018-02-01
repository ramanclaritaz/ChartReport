import { Component, NgModule, Input } from '@angular/core';
import { _reportInfo } from '../sharedData/data';

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
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {
  }
  onSelect(event) {
    console.log(event);
  }

}
