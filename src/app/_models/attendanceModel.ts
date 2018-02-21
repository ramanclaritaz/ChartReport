import { Time } from "@angular/common";
import { _displayProperty } from "./displayProperty";

export interface _attendance {
  employeename: string;
  employeenumber: string;
  attendancedate: Date;
  absent: string;
  intime: Time;
  outtime: Time;
  day: string;
  lop: boolean;
  latetime: Time;
  earlytime: Time;
  weekoff: string;
}

export const _attenList: _displayProperty[] = [
  {
    DisplayName: "Employee Name",
    propertyName: "employeename",
    displayed: true,
    index: 0
  }
  ,
  {
    DisplayName: "Employee Number",
    propertyName: "employeenumber",
    displayed: true,
    index: 1
  }
  ,
  {
    DisplayName: "Date",
    propertyName: "attendancedate",
    displayed: true,
    index: 2
  }
  ,
  {
    DisplayName: "Absent",
    propertyName: "absent",
    displayed: true,
    index: 3
  }
  ,
  {
    DisplayName: "in Time",
    propertyName: "intime",
    displayed: true,
    index: 4
  }
  ,
  {
    DisplayName: "out Time",
    propertyName: "outtime",
    displayed: true,
    index: 5
  }
  ,
  {
    DisplayName: "Day",
    propertyName: "day",
    displayed: true,
    index: 6
  }
  ,
  {
    DisplayName: "Loss of pay",
    propertyName: "lop",
    displayed: true,
    index: 7
  },
  {
    DisplayName: "Late",
    propertyName: "latetime",
    displayed: false,
    index: 8
  }
  ,
  {
    DisplayName: "Early",
    propertyName: "earlytime",
    displayed: false,
    index: 9
  }
  ,
  {
    DisplayName: "Week Off",
    propertyName: "weekoff",
    displayed: false,
    index: 10
  }
]

