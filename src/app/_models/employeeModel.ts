import { _displayProperty, propsType } from "./displayProperty";

interface _employee {
  employeename: string;
  employeenumber: string;
  employeenumbertype: string;
  employeetype: string;
  dateofjoin: string;
  designationname: string;
  departmentname: string;
  divisionname: string;
  businessunit: string;
  busroute: string;
  cardnumber: string;
  confirmationdate: string;
  emailid: string;
  desknumber: string;
  extensionnumber: string;
  gradename: string;
  inactivereason: string;
  inactivestatus: string;
  locationname: string;
  pantsize: string;
  pickuppoint: string;
  relievingdate: Date
  resignationdate: Date;
  sectioncode: string;
  shirtsize: string;
  shoesize: string;
  typeofemployee: string;
  userid: string;
  workingdays: string;
  approvername: string;
  approvernumber: string;
}

export const _employeeList: _displayProperty[] = [
  { displayed: true, displayName: "Name", propertyType: propsType.isString, propertyName: "employeename", index: 0 },
  { displayed: true, displayName: "Number", propertyType: propsType.isString, propertyName: "employeenumber", index: 1 },
  { displayed: true, displayName: "Emp. Type", propertyType: propsType.isString, propertyName: "employeenumbertype", index: 2 },
  { displayed: true, displayName: "Type of Emp.", propertyType: propsType.isString, propertyName: "employeetype", index: 3 },
  { displayed: true, displayName: "DOJ", propertyType: propsType.isDate, propertyName: "dateofjoin", index: 4 },
  { displayed: true, displayName: "Designation", propertyType: propsType.isString, propertyName: "designationname", index: 5 },
  { displayed: true, displayName: "Dept.", propertyType: propsType.isString, propertyName: "departmentname", index: 6 },
  { displayed: true, displayName: "Division", propertyType: propsType.isString, propertyName: "divisionname", index: 7 },
  { displayed: true, displayName: "Mail Id", propertyType: propsType.isString, propertyName: "emailid", index: 8 },
  { displayed: true, displayName: "Card No.", propertyType: propsType.isString, propertyName: "cardnumber", index: 9 },
  { displayed: false, displayName: "Approver Name", propertyType: propsType.isString, propertyName: "approvername", index: 10 },
  { displayed: false, displayName: "Approver No.", propertyType: propsType.isString, propertyName: "approvernumber", index: 11 },
  { displayed: false, displayName: "Location", propertyType: propsType.isString, propertyName: "locationname", index: 12 },
  { displayed: false, displayName: "Desk No.", propertyType: propsType.isString, propertyName: "desknumber", index: 13 },

  { displayed: false, displayName: "Designation", propertyType: propsType.isString, propertyName: "designationname", index: 14 },
  { displayed: false, displayName: "Dept.", propertyType: propsType.isString, propertyName: "departmentname", index: 15 },
  { displayed: false, displayName: "Division", propertyType: propsType.isString, propertyName: "divisionname", index: 16 },
  { displayed: false, displayName: "Name", propertyType: propsType.isString, propertyName: "firstname", index: 17 }
]

export const _personalList: _displayProperty[] = [
  { displayName: "Name", propertyName: "employeename", displayed: true, propertyType: propsType.isString, index: 0 }
  , { displayName: "Emp. No.", propertyName: "employeenumber", displayed: true, propertyType: propsType.isString, index: 1 }
  , { displayName: "Current Address", propertyName: "currentaddress", displayed: true, propertyType: propsType.isString, index: 2 }
  , { displayName: "Permanent Address", propertyName: "permanentaddress", displayed: true, propertyType: propsType.isString, index: 3 }
  , { displayName: "Gender", propertyName: "gender", displayed: true, propertyType: propsType.isString, index: 4 }
  , { displayName: "Contact no.", propertyName: "contactnumber", displayed: true, propertyType: propsType.isString, index: 5 }
  , { displayName: "Martial status", propertyName: "martialstatus", displayed: true, propertyType: propsType.isString, index: 6 }
  , { displayName: "Religion", propertyName: "religion", displayed: true, propertyType: propsType.isString, index: 7 }
]
