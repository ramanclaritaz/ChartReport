import { Component } from '@angular/core'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi, reportInfo, _reportInfo } from '../data';

@Component({
  selector: 'GroupHBarChart',
  template: `
    <ngx-charts-bar-horizontal-2d
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
    </ngx-charts-bar-horizontal-2d>
  `
})
export class GroupHBarChart {
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.multi = multi;
  }
  onSelect(event) {
    console.log(event);
  }

}