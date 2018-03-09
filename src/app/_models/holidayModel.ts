import { Time } from "@angular/common";
import { _displayProperty, propsType } from "./displayProperty";

export interface _holiday {
  holidaydate: Date;
  holidaydescriptions: string;
  finacialyear: string;
  holidaylocation: string;
  holidaytype: string;


}

export const _holidayList: _displayProperty[] = [
  { displayName: "Date", propertyName: "holidaydate", displayed: true, propertyType: propsType.isDate, index: 0 }
  , { displayName: "Descriptions", propertyName: "holidaydescriptions", displayed: true, propertyType: propsType.isString, index: 1 }
  , { displayName: "Finacial Year", propertyName: "finacialyear", displayed: true, propertyType: propsType.isString, index: 2 }
  , { displayName: "Location", propertyName: "holidaylocation", displayed: true, propertyType: propsType.isString, index: 3 }
  , { displayName: "Type of holiday", propertyName: "holidaytype", displayed: true, propertyType: propsType.isString, index: 4 }
]
