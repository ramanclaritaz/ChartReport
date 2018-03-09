import { _displayProperty, propsType } from "./displayProperty";

export const _overtimeList: _displayProperty[] = [
  { displayName: "Req. No.", displayed: true, propertyName: "id", propertyType: propsType.isString, index: 0 }
  , { displayName: "Emp. Name", displayed: true, propertyName: "employeename", propertyType: propsType.isString, index: 1 }
  , { displayName: "Emp. No.", displayed: true, propertyName: "employeenumber", propertyType: propsType.isString, index: 2 }
  , { displayName: "Date", displayed: true, propertyName: "overtimedate", propertyType: propsType.isDate, index: 3 }
  , { displayName: "Staus", displayed: true, propertyName: "approvedstatus", propertyType: propsType.isString, index: 5 }
  , { displayName: "Type", displayed: true, propertyName: "preorpostot", propertyType: propsType.isString, index: 4 }

  , { displayName: "Hour (hh:mm)", displayed: true, propertyName: "totalhours", propertyType: propsType.isTime, index: 6 }
  , { displayName: "Reason", displayed: true, propertyName: "approvalreason", propertyType: propsType.isString, index: 7 }
  , { displayName: "Apporver Name.", displayed: true, propertyName: "approvername", propertyType: propsType.isString, index: 8 }
  , { displayName: "Apporver. No.", displayed: true, propertyName: "approvernumber", propertyType: propsType.isString, index: 9 }
  , { displayName: "Apporved date", displayed: true, propertyName: "approveddate", propertyType: propsType.isString, index: 10 }
]
