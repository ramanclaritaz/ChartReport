import { Component, Input, EventEmitter, Output } from '@angular/core'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { _reportInfo } from '../_models/_index';

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
  @Input('reportInfo') reportInfo: _reportInfo
  @Output() select = new EventEmitter<_reportInfo>();

  constructor() {

  }

  onSelect(event) {
    this.select.emit(event);
  }

}
