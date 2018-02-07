import { Component } from '@angular/core';
import { holiday } from '../sharedData/holidayList';
import { _reportInfo, reportInfo, _propertySet, PropertySet, typeOfExports, sType } from '../sharedData/data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { attendancedata } from '../sharedData/attendanceData';
import { validateConfig } from '@angular/router/src/config';
import { retry } from 'rxjs/operators/retry';
import { commonServices } from '../sharedData/common.service';


@Component({
  selector: 'RecordReport',
  templateUrl: "../Reports/RecordReport.html",
  providers: [commonServices]
})
export class RecordReport {
  holiday: any[];
  reportInfo: _reportInfo;
  paramId: any;
  params: any;
  propertyValue: _propertySet;
  constructor(private route: ActivatedRoute, private router: Router, private commonservice: commonServices) {
    this.params = this.route.params;
    this.propertyValue = PropertySet;
    this.propertyValue.typeOfReports = sType;
    this.propertyValue.graph = false;
    this.propertyValue.typeOfExports = typeOfExports.filter((val) => {
      if (val.graph == false)
        return val;
    });
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
      this.reportInfo.title = "Attendance report from ( " + this.params[1].path + " to " + this.params[2].path + " )";
    }

  }
  propertyChange(event: _propertySet) {
    this.reportInfo.showLegend = (event.showLegend == 1 ? true : false);
  }
  exportChange(event:number)
  {
    if (event != 0) {
      this.commonservice.Download(event, this.reportInfo.title, "", this.holiday)
    }
  }
}
