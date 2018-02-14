import { Component, Input,OnInit } from '@angular/core'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { _reportInfo } from '../sharedData/data';

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
export class VBarChart implements OnInit {
  @Input('reportInfo') reportInfo: _reportInfo
  constructor() {

  }
  ngOnInit()
  {
    console.log(this.reportInfo);
  }
  onSelect(event) {
    console.log(event);
  }
}

