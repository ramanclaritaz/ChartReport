import { OnInit } from "@angular/core";
import { indexList } from "./sharedData/data";
import { Router, Routes } from "@angular/router";
import { RecordReport, chartComponent } from "./Reports/_index";
import { Route } from "@angular/compiler/src/core";


export class routeApp implements OnInit {
  public router: Routes = [];
  constructor() {

  }

  ngOnInit() {
    indexList.forEach((element) => {
      element.url.forEach((val) => {
        var data = { path: val, component: (element.componentName == 1 ? RecordReport : chartComponent) }
        console.log(data);
        this.router.push(data);
      });
    });
  }
}
