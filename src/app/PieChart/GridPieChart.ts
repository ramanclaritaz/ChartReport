import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() select = new EventEmitter<_reportInfo>();

  constructor() {

  }

  onSelect(event) {
    this.select.emit(event);
  }
}
