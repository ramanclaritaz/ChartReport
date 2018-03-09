export enum propsType {
  isDate = 0, isTime = 1, isString = 2, isNumber = 3
}

export interface _displayProperty {
  displayName: string;
  propertyName: string
  displayed: boolean;
  propertyType: propsType;
  index?: number
}
