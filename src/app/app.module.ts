import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HBarChart, VBarChart, GroupHBarChart, GroupVBarChart, StackedVBarChart, StackedHBarChart } from './BarChart/_index';
import { PieChart, AdvPieChart, GridPieChart } from './PieChart/_index';
import {  RecordReport,  chartComponent } from './Reports/_index';
import { sharedData } from './sharedData/_index';
import { httpService, timeOfficeService, commonServices } from './_services/_index';

import { AlertComponent, property, search } from './_derectives/_index'
import { AlertService } from './_services/_index'


const appRoutes: Routes = [
  { path: "holidaylist/:id", component: RecordReport },
  { path: "availableleave/:id", component: chartComponent },
  { path: "leavestatus/:id/:fdate/:tdate", component: chartComponent },
  { path: "holidaylist", component: RecordReport },
  { path: "otstatus", component: chartComponent },
  { path: "attendance/:fdate/:tdate", component: RecordReport },
  // { path: "availableleave/:data", component: chartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VBarChart,
    HBarChart,
    GroupHBarChart,
    GroupVBarChart,
    StackedVBarChart,
    RecordReport,
    StackedHBarChart,
    PieChart,
    AdvPieChart,
    GridPieChart,
    chartComponent,
    property,
    search,
    AlertComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule, HttpModule,
    RouterModule.forRoot(appRoutes), FormsModule
  ],

  providers: [httpService, timeOfficeService, commonServices, sharedData, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
