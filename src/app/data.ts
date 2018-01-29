export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 2000000
  },
  {
    "name": "Aus",
    "value": 7800000
  }
  ,
  {
    "name": "India",
    "value": 9000000
  }
];

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

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


}
export interface _propertySet {
  typeOfReport: number;
  showLegend: number;
}
export const PropertySet: _propertySet = {
  showLegend: 1, typeOfReport: 1
}
export const reportInfo: _reportInfo =
  {
    view: [900, 400]
    , colorScheme: {
      domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#A10A28', '#C405F1']
    }
    , showXAxis: true
    , showYAxis: true
    , gradient: false
    , showLegend: true
    , showXAxisLabel: true
    , showYAxisLabel: true
    , showLabels: true
    , explodeSlices: false
    , doughnut: false
  }


