import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { single, multi, _reportInfo, reportInfo, _propertySet, PropertySet } from '../sharedData/data';
import * as html2canvas from 'html2canvas'
import { ViewChild } from '@angular/core/src/metadata/di';
import { jsPDF } from "jspdf";

@Component({
  selector: 'property-set',
  templateUrl: "../Reports/Property.html"
})
export class Property {
  @Input('propertyset') propertySet: _propertySet;
  @Output() propertyChange = new EventEmitter<_propertySet>();
  //  @ViewChild
  constructor() {

  }
  valueChange(event: _propertySet) {
    this.propertyChange.emit(event);

  }
  // GeneratePDF () {
  //   html2canvas(this.element.nativeElement, <html2canvas.Html2CanvasOptions>{
  //     onrendered: function(canvas: HTMLCanvasElement) {
  //       var pdf = new jsPDF('p','pt','a4');
  //       var img = canvas.toDataURL("image/png");
  //       pdf.addImage(img, 'PNG', 10, 10, 580, 300);
  //       pdf.save('web.pdf');
  //     }
  //   });
  // }
}
