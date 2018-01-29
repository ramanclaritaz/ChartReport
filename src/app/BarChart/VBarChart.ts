import { Component } from '@angular/core'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, _reportInfo, reportInfo } from '../data';

@Component({
  selector: 'VBarChart',
  template: `
    <ngx-charts-bar-vertical
    [view]="reportInfo.view"
    [scheme]="reportInfo.colorScheme"
    [results]="reportInfo.single"
    [gradient]="reportInfo.gradient"
    [xAxis]="reportInfo.showXAxis"
    [yAxis]="reportInfo.showYAxis"
    [legend]="reportInfo.showLegend"
    [showXAxisLabel]="reportInfo.showXAxisLabel"
    [showYAxisLabel]="reportInfo.showYAxisLabel"
    [xAxisLabel]="reportInfo.xAxisLabel"
    [yAxisLabel]="reportInfo.yAxisLabel"
    (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `
})
export class VBarChart {
  reportInfo: _reportInfo
  constructor() {
    this.reportInfo = reportInfo;
    this.reportInfo.single = single;
  }
  onSelect(event) {
    console.log(event);
  }
}

