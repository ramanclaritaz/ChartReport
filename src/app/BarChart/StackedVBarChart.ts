import {Component} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi, _reportInfo, reportInfo} from '../data';

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
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.multi = multi;
  }
  onSelect(event) {
    console.log(event);
  }
}
