import { _displayProperty } from "./displayProperty";

export interface _searchData {
  query?:any;
  estbl: string;//elasticsearch index name
  headerList?:_displayProperty[];
  selectedOpertor?:number;
  selectedField?:number;
}


