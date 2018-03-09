import * as html2canvas from 'html2canvas'
import * as jsPDF from "jspdf";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Injectable } from '@angular/core';

@Injectable()
export class commonServices {

  constructor() {

  }

  Download(typeOfexport: number, fileName: string, element?: string, data?: any[]) {
    switch (typeOfexport.toString()) {
      case "1":
        this.HtmltoPDF(fileName, element);
        break;
      case "2":
        this.JsontoCSV(data, fileName);
        break;
    }

  }
  private JsontoCSV(data: any[], fileName) {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true
    };
    var csv = new Angular2Csv(data, fileName, options);
  }
  private HtmltoPDF(fileName: string, element?: string) {

    let data=document.getElementById(element);
    console.log(data);
    html2canvas((element == null || element == undefined) ? document.body : document.getElementById(element)).then((canvas: HTMLCanvasElement) => {
      const pdf = new jsPDF('l', 'pt', 'a4');
      console.log(pdf);
      var img = canvas.toDataURL("image/png");
      pdf.addImage(img, 'PNG', 10, 10, 900, 600);
      pdf.save(fileName + '.pdf');
    }
    );
  }
}
