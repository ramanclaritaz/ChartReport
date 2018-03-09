import { Time } from "@angular/common";
import { _displayProperty, propsType } from "./displayProperty";

interface _attendance {
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
  { displayName: "Emp. Name", propertyName: "employeename", displayed: true, propertyType: propsType.isString, index: 0 }
  , { displayName: "Emp. No.", propertyName: "employeenumber", displayed: true, propertyType: propsType.isString, index: 1 }
  , { displayName: "Date", propertyName: "attendancedate", displayed: true, propertyType: propsType.isDate, index: 2 }
  , { displayName: "Absent", propertyName: "absent", displayed: true, propertyType: propsType.isString, index: 3 }
  , { displayName: "in Time", propertyName: "intime", displayed: true, propertyType: propsType.isTime, index: 4 }
  , { displayName: "out Time", propertyName: "outtime", displayed: true, propertyType: propsType.isTime, index: 5 }
  , { displayName: "Day", propertyName: "day", displayed: true, propertyType: propsType.isString, index: 6 }
  , { displayName: "LOP", propertyName: "lop", displayed: false, propertyType: propsType.isNumber, index: 7 }
  , { displayName: "Late", propertyName: "latetime", displayed: false, propertyType: propsType.isTime, index: 8 }
  , { displayName: "Early", propertyName: "earlytime", displayed: false, propertyType: propsType.isTime, index: 9 }
  , { displayName: "Week Off", propertyName: "weekoff", displayed: false, propertyType: propsType.isString, index: 10 }
]

export const _leaveList: _displayProperty[] = [
  { displayName: "Req. No.", displayed: true, propertyName: "id", propertyType: propsType.isString, index: 0 }
  , { displayName: "Emp. Name", displayed: true, propertyName: "employeename", propertyType: propsType.isString, index: 1 }
  , { displayName: "Emp. No.", displayed: true, propertyName: "employeenumber", propertyType: propsType.isString, index: 2 }
  , { displayName: "Leave type", displayed: true, propertyName: "probabilityofleave", propertyType: propsType.isString, index: 3 }
  , { displayName: "Date", displayed: true, propertyName: "leavedate", propertyType: propsType.isString, index: 4 }
  , { displayName: "Fullday", displayed: true, propertyName: "fullday", propertyType: propsType.isString, index: 5 }
  , { displayName: "Status", displayed: true, propertyName: "approvedstatus", propertyType: propsType.isString, index: 6 }

  , { displayName: "Reason", displayed: true, propertyName: "appliedreason", propertyType: propsType.isString, index: 7 }
  , { displayName: "Apporver Name.", displayed: true, propertyName: "approvername", propertyType: propsType.isString, index: 8 }
  , { displayName: "Apporver. No.", displayed: true, propertyName: "approvernumber", propertyType: propsType.isString, index: 9 }
  , { displayName: "Apporved date", displayed: true, propertyName: "approveddate", propertyType: propsType.isString, index: 10 }
]

export const _availedleave: _displayProperty[] = [
  { displayName: "Emp. Name", displayed: true, propertyName: "employeename", propertyType: propsType.isString, index: 1 }
  , { displayName: "Emp. No.", displayed: true, propertyName: "employeenumber", propertyType: propsType.isString, index: 2 }
  , { displayName: "Finacial year", displayed: true, propertyName: "finacialyear", propertyType: propsType.isString, index: 3 }
  , { displayName: "Date", displayed: true, propertyName: "leavedate", propertyType: propsType.isString, index: 4 }
  , { displayName: "Fullday", displayed: true, propertyName: "fullday", propertyType: propsType.isString, index: 5 }
  , { displayName: "Status", displayed: true, propertyName: "approvedstatus", propertyType: propsType.isString, index: 6 }

  , { displayName: "Reason", displayed: true, propertyName: "appliedreason", propertyType: propsType.isString, index: 7 }
  , { displayName: "Apporver Name.", displayed: true, propertyName: "approvername", propertyType: propsType.isString, index: 8 }
  , { displayName: "Apporver. No.", displayed: true, propertyName: "approvernumber", propertyType: propsType.isString, index: 9 }
  , { displayName: "Apporved date", displayed: true, propertyName: "approveddate", propertyType: propsType.isString, index: 10 }
]

