import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HBarChart } from './BarChart/HBarChart';
import { GroupVBarChart } from './BarChart/GroupVBarChart';
import { GroupHBarChart } from './BarChart/GroupHBarChart';
import { VBarChart } from './BarChart/VBarChart';
import { StackedVBarChart } from './BarChart/StackedVBarChart';
import { StackedHBarChart } from './BarChart/StackedHBarChart';
import { PieChart } from './PieChart/PieChart';
import { AdvPieChart } from './PieChart/AdvPieChart';
import { GridPieChart } from './PieChart/GridPieChart';
import { ChartReport } from './Reports/ChartReport';
import { Property } from './Reports/Property';


const appRoutes: Routes = [
  { path: 'vbar', component: VBarChart },
  { path: 'hbar', component: HBarChart },
  { path: 'groupvbar', component: GroupVBarChart },
  { path: 'grouphbar', component: GroupHBarChart },
  { path: 'stackedvbar', component: StackedVBarChart },
  { path: 'stackedhbar', component: StackedHBarChart },
  { path: 'piechart', component: PieChart },
  { path: 'advpiechart', component: AdvPieChart },
  { path: 'gridpiechart', component: GridPieChart },
  { path: "report", component: ChartReport }
];

@NgModule({
  declarations: [
    AppComponent, VBarChart, HBarChart, GroupHBarChart, GroupVBarChart
    , StackedVBarChart, StackedHBarChart, PieChart, AdvPieChart, GridPieChart,ChartReport,Property
  ],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule,
    RouterModule.forRoot(appRoutes),FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
