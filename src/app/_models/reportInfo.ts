export interface _reportInfo {
  single?: any[];
  multi?: any[];
  title?: string;
  subTitle?: string;
  view: any[];
  // options
  showXAxis: boolean;
  showYAxis: boolean;
  gradient: boolean;
  showLegend: boolean;
  showXAxisLabel: boolean;
  xAxisLabel?: string;
  showYAxisLabel: boolean;
  yAxisLabel?: string;
  colorScheme: any;
  //Pie chart
  showLabels: boolean;
  explodeSlices: boolean;
  doughnut: boolean;
  isSingle:boolean;
}
