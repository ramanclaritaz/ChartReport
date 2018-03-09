import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { httpService } from './http.service';



@Injectable()
export class timeOfficeService {

  list: any;
  headers: any;
  constructor(private _http: httpService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
  getAvailableLeave(searchData: any) {
    return this._http.post('availableleave', searchData);
  }
  getAvailableLeaveList(searchData: any) {
    return this._http.post('availableleave', searchData);
  }
  getStatus(searchData: any) {
    return this._http.post('status', searchData);
  }
  getList(searchData: any) {
    return this._http.post('list', searchData);
  }

}
