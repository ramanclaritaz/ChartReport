import { Component, OnInit, Inject } from '@angular/core';
import { sharedData, indexList } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { retry } from 'rxjs/operators/retry';
import { commonServices, timeOfficeService } from '../_services/_index';
import { _propertySet, _reportInfo, _searchData, _attenList } from '../_models/_index';
import { _displayProperty } from '../_models/displayProperty';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';



@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html",
  providers: [commonServices]
})
export class RecordReport implements OnInit {
  headerList: any[];
  dataList: any[];
  showFilter: boolean;
  reportInfo: _reportInfo;
  paramId: any;
  params: any;
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

  ngOnInit() {
    this.route.url.subscribe((val) => {
      this.params = val;
      this.setSearchData(val);
    });
    this.showFilter = true;
    switch (this.params[0].path) {
      case 'holidaylist':
        this.reportInfo.title = "Holiday List"

        break;
      case 'attendanceList':
        this.myOptions = _attenList.map(val => {
          return { "id": val.index, "name": val.displayName }
        })
        this.headerList = _attenList.filter((val) => {
          if (val.displayed)
            return val;
        });
        this.optionsModel = this.headerList.map((val) => {
          return val.index;
        })
        this.reportInfo.title = "Attendance Report from ( " + this.searchData.fromDate + " to " + this.searchData.toDate + " )";
        this.searchData.estbl = indexList[6].Name;
        this.getList();
        break;

    }
  }
  getList() {
    this.timeOffice.getLeaveStatus(this.searchData).subscribe((res: any) => {
      this.dataList = res.data;
    });
  }

  change(val: _displayProperty) {
    this.headerList = this.headerList.filter(res => {
      if (val != res) return res;
    });
    console.log(val);
    console.log(this.optionsModel);
    var index = this.optionsModel.indexOf(val.index);
    this.optionsModel.splice(index, 1);
  }

  onChange($event) {
    let data: _displayProperty;
    let datas = [];
    $event.forEach(event => {
      data = (_attenList[event]);
      datas.push(data);
    });

    this.headerList = datas.sort((a: any, b: any) => a.index - b.index);
  }

  setSearchData(val: any) {
    this.searchData = JSON.parse(val[1].path);
    this.searchData.filter = true;
  }

  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event: number) {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title, "", this.dataList)
    }
  }
}
