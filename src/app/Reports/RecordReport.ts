import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { sharedData, indexList, operators } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { commonServices, timeOfficeService } from '../_services/_index';
import { _propertySet, _reportInfo, _searchData, _attenList, _holidayList } from '../_models/_index';
import { _displayProperty, propsType } from '../_models/displayProperty';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Modal } from 'ng2-modal';

const _reg = [
  { findIndex: "(", value: "{" },
  { findIndex: ")", value: "}" },
  { findIndex: "'", value: "\"" }
]

@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html",
  providers: [commonServices, Modal]
})
export class RecordReport implements OnInit {
  headerList: any[];
  dataList: any[];
  headerdata: any[];
  showFilter: boolean;
  reportInfo: _reportInfo;
  paramId: any;
  params = {};
  propertyValue: _propertySet;
  searchData: _searchData;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  constructor(@Inject(timeOfficeService) private timeOffice: timeOfficeService, private route: ActivatedRoute, private router: Router, private commonservice: commonServices, private comVar: sharedData) {
    this.propertyValue = this.comVar.PropertySet;
    this.propertyValue.typeOfReports = this.comVar.ListsType
    this.propertyValue.graph = false;
    this.propertyValue.typeOfExports = this.comVar.ListTypeOfExport;
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
      console.log(this.params);
    });
    this.showFilter = true;
    this.route.url.subscribe((val) => {
      let values: string;
      if (val.length > 2)
        values = val[1].path;
      else
        values = val[0].path;
      indexList.forEach(data => {
        if (data.url.filter((e) => e.name.toLowerCase() == values.toLowerCase()).length > 0) {
          this.reportInfo.title = data.title;
          this.headerdata=data.hearderList;
          this.searchData = { estbl: data.Name, query: this.params['query'], headerList: data.hearderList, selectedField: -1, selectedOpertor: 0 }
          this.getAssgin();
          this.getList();
        }
      });
    });
  }
  applyfilter(event) {
    if (this.searchData.selectedField != -1 && this.searchData.selectedOpertor != 0) {
      event.close();
      var oper = operators.filter((val) => val.id == this.searchData.selectedOpertor)[0];
      var columName = this.searchData.headerList.filter((val) => val.index == this.searchData.selectedField)[0];
      var query;
      console.log(this.searchData);
      if (oper.id == this.searchData.selectedOpertor) {
        switch (oper.id) {
          case 4:
            query = "{'" + oper.query + "':{'" + columName.propertyName + "':{'gte':'" + this.searchData["fromDate"] + "','lte':'" + this.searchData["toDate"] + "'}}}";
          case 1:
          case 7:
            if (columName.propertyType == propsType.isDate)
              query = "{'" + oper.query + "':{'" + columName.propertyName + "':'" + this.searchData["date"] + "'}}";
            else
              query = "{'" + oper.query + "':{'" + columName.propertyName + "':'" + this.searchData["value"] + "'}}";
            break;
        }
        query = this.replaceAll(query);
        this.searchData.query = JSON.parse(query)
        this.getList();
      }
    }
  }
  reset(modal) {
    modal.close();
    this.ngOnInit();
  }
  getAssgin() {
    this.myOptions = this.headerdata.map(val => {
      return { "id": val.index, "name": val.displayName }
    })
    this.headerList = this.headerdata.filter((val) => {
      if (val.displayed)
        return val;
    });
    this.optionsModel = this.headerList.map((val) => {
      return val.index;
    })
  }
  getList() {
    this.timeOffice.getList(this.searchData).subscribe((res: any) => {
      console.log(res);
      if (res.result)
        this.dataList = res.data;
    });
  }

  change(val: _displayProperty) {
    this.headerList = this.headerList.filter(res => {
      if (val != res) return res;
    });
    var index = this.optionsModel.indexOf(val.index);
    this.optionsModel.splice(index, 1);
  }

  onChange($event) {
    let data: _displayProperty;
    let datas = [];
    $event.forEach(event => {
      data = (this.headerdata[event]);
      datas.push(data);
    });
    this.headerList = datas.sort((a: any, b: any) => a.index - b.index);
  }
  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event: number) {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title, "reportData", this.dataList)
    }
  }
}
