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
    displayName: "Employee Name",
    propertyName: "employeename",
    displayed: true,
    index: 0
  }
  ,
  {
    displayName: "Employee Number",
    propertyName: "employeenumber",
    displayed: true,
    index: 1
  }
  ,
  {
    displayName: "Date",
    propertyName: "attendancedate",
    displayed: true,
    index: 2
  }
  ,
  {
    displayName: "Absent",
    propertyName: "absent",
    displayed: true,
    index: 3
  }
  ,
  {
    displayName: "in Time",
    propertyName: "intime",
    displayed: true,
    index: 4
  }
  ,
  {
    displayName: "out Time",
    propertyName: "outtime",
    displayed: true,
    index: 5
  }
  ,
  {
    displayName: "Day",
    propertyName: "day",
    displayed: true,
    index: 6
  }
  ,
  {
    displayName: "Loss of pay",
    propertyName: "lop",
    displayed: true,
    index: 7
  },
  {
    displayName: "Late",
    propertyName: "latetime",
    displayed: false,
    index: 8
  }
  ,
  {
    displayName: "Early",
    propertyName: "earlytime",
    displayed: false,
    index: 9
  }
  ,
  {
    displayName: "Week Off",
    propertyName: "weekoff",
    displayed: false,
    index: 10
  }
]

