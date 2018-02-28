import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoadingModule } from 'ngx-loading';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HBarChart, VBarChart, GroupHBarChart, GroupVBarChart, StackedVBarChart, StackedHBarChart } from './BarChart/_index';
import { PieChart, AdvPieChart, GridPieChart } from './PieChart/_index';
import { RecordReport, chartComponent } from './Reports/_index';
import { sharedData } from './sharedData/_index';
import { httpService, timeOfficeService, commonServices } from './_services/_index';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AlertComponent, property, search, ConfirmDialog, loading } from './_derectives/_index'
import { AlertService } from './_services/_index'


const appRoutes: Routes = [
  { path: "holidaylist/:searchdata", component: RecordReport },
  { path: "availableleave/:searchdata", component: chartComponent },
  { path: "leavestatus/:searchdata", component: chartComponent },
  { path: "holidaylist/:searchdata", component: RecordReport },
  { path: "otstatus/:searchdata", component: chartComponent },
  { path: "attendanceList/:searchdata", component: RecordReport },
  { path: "attendance/:searchdata", component: chartComponent }
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
    AlertComponent, ConfirmDialog, loading
  ],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule, HttpModule,LoadingModule,
    RouterModule.forRoot(appRoutes), FormsModule,AngularFontAwesomeModule,MultiselectDropdownModule
  ],

  providers: [httpService, timeOfficeService, commonServices, sharedData, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
