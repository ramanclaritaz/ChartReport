// export interface dataProperty {
//   value: any;// Set the Value
//   visibility: boolean;//Set the field visiblity
//   disabled: boolean;//Set the field enabled or disabled
//   format: any; // Set value format
//   name: string // Set the display name of property
// }

export interface _searchData {
  empNo?: string;
  fromDate?: string;
  toDate?: string;
  approverNo?: string;
  filter?: boolean;
  location?: string;
  estbl: string;//elasticsearch index name
}


