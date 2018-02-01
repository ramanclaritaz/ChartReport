import { Component } from '@angular/core';
import { holiday } from '../sharedData/holidayList';
import { _reportInfo, reportInfo } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { attendancedata } from '../sharedData/attendanceData';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html"
})
export class RecordReport {
  holiday: any[];
  reportInfo: _reportInfo;
  paramId: any;
  params: any;
  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.route.url.subscribe((val) => {
      this.params = val;
      this.paramId = val[0].path;
    });
    if (this.paramId == 'holidaylist') {
      this.holiday = holiday.filter((val) => {
        if (val.holidayLocation == this.params[1].path) {
          return val;
        }
      });
      this.reportInfo = reportInfo;
      this.reportInfo.title = "Holiday List"
    }
    else if (this.paramId == 'attendance') {
      console.log(new Date(this.params[1].path));
        console.log(new Date(this.params[2].path));
      this.holiday = attendancedata.filter((val) => {

        if ((new Date(val.attendanceDate) > new Date(this.params[1].path)) && (new Date(val.attendanceDate) < new Date(this.params[2].path))) {
          return val;
        }
      });
      this.reportInfo = reportInfo;
      this.reportInfo.title = "Attendance report from ( "+this.params[1].path+" to "+this.params[2].path+" )";
    }

  }
}
