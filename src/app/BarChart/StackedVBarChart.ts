import {Component,Input} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { _reportInfo } from '../sharedData/data';

@Component({
  selector: 'StackedVBarChart',
  template: `
    <ngx-charts-bar-vertical-stacked
    [view]="reportInfo.view"
    [scheme]="reportInfo.colorScheme"
    [results]="reportInfo.multi"
    [gradient]="reportInfo.gradient"
    [xAxis]="reportInfo.showXAxis"
    [yAxis]="reportInfo.showYAxis"
    [legend]="reportInfo.showLegend"
    [showXAxisLabel]="reportInfo.showXAxisLabel"
    [showYAxisLabel]="reportInfo.showYAxisLabel"
    [xAxisLabel]="reportInfo.xAxisLabel"
    [yAxisLabel]="reportInfo.yAxisLabel"
    (select)="onSelect($event)">
    </ngx-charts-bar-vertical-stacked>
  `
})
export class StackedVBarChart {
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {

  }
  onSelect(event) {
    console.log(event);
  }
}
