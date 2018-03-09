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
import { ModalModule } from "ng2-modal";
import { NgDatepickerModule } from 'ng2-datepicker';

const appRoutes: Routes = [
  { path: "record/:id", component: RecordReport, },
  { path: "attendanceList", component: RecordReport },
  { path: "appliedcompoffList", component: RecordReport, },
  { path: "appliedLeaveList", component: RecordReport },
  { path: "holidaylist", component: RecordReport, },
  { path: "leavelist", component: RecordReport },
  { path: "employeeDetail", component: RecordReport, },
  { path: "personaldetails", component: RecordReport },

  { path: "chart/:id", component: chartComponent },
  { path: "compoffdetailstatus", component: chartComponent },
  { path: "availableleave", component: chartComponent },
  { path: "leavestatus", component: chartComponent },
  { path: "otstatus", component: chartComponent },
  { path: "attendance", component: chartComponent }
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
  imports: [BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule, HttpModule,
    LoadingModule,
    ModalModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFontAwesomeModule,
    MultiselectDropdownModule,
    NgDatepickerModule
  ],

  providers: [httpService, timeOfficeService, commonServices, sharedData, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }

}
