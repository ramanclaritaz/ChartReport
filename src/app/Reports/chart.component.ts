import { Component, NgModule, Input, ViewChild, ElementRef, Inject, style, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { _reportInfo, _propertySet, _searchData } from '../_models/_index';
import { commonServices, httpService, timeOfficeService } from '../_services/_index';
import { sharedData, indexList } from '../sharedData/data';
import { forEach } from '@angular/router/src/utils/collection';
import * as moment from "moment";
import { _response } from '../_models/responseModel';
const _reg = [
  { findIndex: "(", value: "{" },
  { findIndex: ")", value: "}" },
  { findIndex: "'", value: "\"" }
]

@Component({
  selector: 'report',
  templateUrl: "../Reports/chart.component.html"

})
export class chartComponent implements OnInit {
  reportInfo: _reportInfo
  propertyValue: _propertySet
  searchData: _searchData;
  isSingle: boolean;
  showFilter: boolean;
  params: any;
  result: _response;
  single: any[];
  values: string;
  constructor(@Inject(timeOfficeService) private timeOffice: timeOfficeService, private route: ActivatedRoute, private router: Router, private commonservice: commonServices, private comVar: sharedData) {
    this.propertyValue = this.comVar.PropertySet;
    this.propertyValue.typeOfReports = this.comVar.ListsType

    this.propertyValue.graph = false;
    this.reportInfo = this.comVar.ReportInfo;
  }
  replaceAll(str: string) {
    _reg.forEach((element) => {
      while (str.indexOf(element.findIndex) != -1) {
        str = str.replace(element.findIndex, element.value);
      }
    });
    return str;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((val) => {
      let params: string;
      params = val['_a'];
      params = this.replaceAll(params);
      this.params = JSON.parse(params);
    });
    this.showFilter = true;
    this.route.url.subscribe((val) => {

      if (val.length > 2)
        this.values = val[1].path;
      else
        this.values = val[0].path;
      indexList.forEach(data => {
        if (data.url.filter((e) => e.name.toLowerCase() == this.values.toLowerCase()).length > 0) {
          this.reportInfo.title = data.title;
          this.propertyValue.graph = true;
          this.propertyValue.typeOfExports = this.comVar.loadtypeOfExports(this.propertyValue.graph);
          this.searchData = { estbl: data.Name, query: this.params['query'], headerList: data.hearderList, selectedField: -1, selectedOpertor: 0 }
        }
        this.callBack(this.values);
      });
    });
  }
  onSelect(event) {
    if (this.result.data.length > 0) {
      var data = "(\"query\":(\"match\":(" + this.result.data[0].columnName + "\":\"" + event.name + "\"))";
      console.log(data);
    }

    indexList.forEach(data => {
      if (data.url.filter((e) => e.name.toLowerCase() == this.values.toLowerCase()).length > 0) {

        this.router.navigate(['/' + data.url.filter((a) => a.type == 0)[0].name, { '_a': data }]);
      }

    });
  }
  callBack(val: string) {
    switch (val) {
      case "availableleave":
        this.showFilter = false;
        this.getAvailableLeave();
        break;
      default:
        this.showFilter = true;
        this.getStatus();
        break;
    }
  }
  getStatus() {
    this.timeOffice.getStatus(this.searchData).subscribe((res: any) => {
      this.result = res;
      this.reportInfo.single = res.data;
    });
  }
  getAvailableLeave() {
    this.timeOffice.getAvailableLeave(this.searchData).subscribe((res: any) => {
      this.result = res;
      this.reportInfo.title = "Applied leave status"
      this.reportInfo.single = res.data;

    });
  }
  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event: number) {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title, "reportData")
    }
  }
  submit(event: _searchData) {
    this.searchData = event;
    this.callBack(this.params);
  }
  reset() {
    this.ngOnInit();
  }
}
