import { Component, NgModule, Input } from '@angular/core';
import { _reportInfo } from '../_models/_index';

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
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {
  }
  onSelect(event) {
    console.log(event);
  }

}
