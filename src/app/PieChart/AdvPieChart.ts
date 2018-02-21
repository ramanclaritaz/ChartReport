import {Component, NgModule,Input} from '@angular/core';
import { _reportInfo } from '../_models/_index';

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
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {
  }
  onSelect(event) {
    console.log(event);
  }

}
