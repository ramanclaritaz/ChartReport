import { Component, NgModule, Input, ViewChild, OnInit } from '@angular/core';
import { single, multi, _reportInfo, reportInfo, PropertySet, _propertySet, mType } from '../sharedData/data';
import { Property } from './Property';
import { ElasticSearchService } from '../elasticsearch.service';
import { httpService } from '../httpService';


@Component({
  selector: 'departmentwise',
  templateUrl: "../Reports/DepartmentWise.html",
  providers: [httpService]
})
export class DepartmentWise {
  reportInfo: _reportInfo;
  data: any;
  searchMovieModel: any;
  errorMessage: any;
  constructor(private es: httpService) {
    this.searchMovieModel = { id: '12', name: 'abc' };
    this.reportInfo = reportInfo;
    this.reportInfo.title = "Department wise employee counts";
    this.reportInfo.single = single;
  }





  ngOnInit() {
    this.es.get('employeedetails/_search').subscribe((val) => {
      console.log(val);
    })

  }


}

