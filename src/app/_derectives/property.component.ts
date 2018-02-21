import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import * as html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
import { _propertySet } from '../_models/_index';

@Component({
  selector: 'app-property',
  templateUrl: "./property.component.html"
})
export class property {
  @Input('propertyset') propertySet: _propertySet;
  @Output() propertyChange = new EventEmitter<_propertySet>();
  @Output() exportChange=new EventEmitter<number>();
  constructor() {

  }
  valueChange(event: _propertySet) {
    this.propertyChange.emit(event);

  }
  export(event:number)
  {
    this.exportChange.emit(event);
  }
}
