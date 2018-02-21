import { Component,Input } from '@angular/core'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { _reportInfo } from '../_models/_index';

@Component({
  selector: 'GroupVBarChart',
  template: `
    <ngx-charts-bar-vertical-2d
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
    </ngx-charts-bar-vertical-2d>
  `
})
export class GroupVBarChart {
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {
  }
  onSelect(event) {
    console.log(event);
  }

}
