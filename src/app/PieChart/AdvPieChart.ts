import {Component, NgModule,Input, Output, EventEmitter} from '@angular/core';
import { _reportInfo } from '../_models/_index';

@Component({
  selector: 'AdvPieChart',
  template: `<ngx-charts-advanced-pie-chart [view]="reportInfo.view" [scheme]="reportInfo.colorScheme" [results]="reportInfo.single" [gradient]="reportInfo.gradient" (select)="onSelect($event)">    </ngx-charts-advanced-pie-chart>  `
})
export class AdvPieChart {
  @Input('reportInfo') reportInfo: _reportInfo
  @Output() select = new EventEmitter<_reportInfo>();

  constructor() {

  }

  onSelect(event) {
    this.select.emit(event);
  }

}
