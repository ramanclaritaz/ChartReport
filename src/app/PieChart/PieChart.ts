import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { _reportInfo } from '../_models/_index';

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
  @Output() select = new EventEmitter<_reportInfo>();

  constructor() {

  }

  onSelect(event) {
    this.select.emit(event);
  }

}
