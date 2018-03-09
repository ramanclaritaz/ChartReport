import { _displayProperty, propsType } from "./displayProperty";
export const _compOffList: _displayProperty[] =
  [
      { displayName: "Req. No.", displayed: true, propertyName: "id", propertyType: propsType.isString, index: 0 }
    , { displayName: "Emp. Name", displayed: true, propertyName: "employeename", propertyType: propsType.isString, index: 1 }
    , { displayName: "Emp. No.", displayed: true, propertyName: "employeenumber", propertyType: propsType.isString, index: 2 }
    , { displayName: "Descriptions", displayed: true, propertyName: "descriptions", propertyType: propsType.isString, index: 3 }
    , { displayName: "From date", displayed: true, propertyName: "fromdate", propertyType: propsType.isDate, index: 4 }
    , { displayName: "To date", displayed: true, propertyName: "todate", propertyType: propsType.isDate, index: 5 }
    , { displayName: "Status", displayed: true, propertyName: "approvedstatus", propertyType: propsType.isString, index: 6 }

    , { displayName: "Reason", displayed: true, propertyName: "appliedreason", propertyType: propsType.isString, index: 7 }
    , { displayName: "Apporver Name.", displayed: true, propertyName: "approvername", propertyType: propsType.isString, index: 8 }
    , { displayName: "Apporver. No.", displayed: true, propertyName: "approvernumber", propertyType: propsType.isString, index:9 }
    , { displayName: "Apporved date", displayed: true, propertyName: "approveddate", propertyType: propsType.isString, index: 10 }
  ]
