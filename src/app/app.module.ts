import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { httpService } from "./httpService";


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
import { ChartReport } from './Reports/SingleChartReport';
import { Property } from './Reports/Property';
import { MultiChartReport } from './Reports/MultiChartReport';
import { RecordReport } from './Reports/RecordReport';
import { timeOfficeService } from './sharedData/timeOffice.service';
import { commonServices } from './sharedData/common.service';
import { sharedData } from './sharedData/data';


const appRoutes: Routes = [
  { path: "holidaylist/:id", component: RecordReport },
  { path: "availableleave/:id", component: ChartReport },
  { path: "leavestatus/:id/:fdate/:tdate", component: ChartReport },
  { path: "holidaylist", component: RecordReport },
  { path: "otstatus", component: MultiChartReport },
  { path: "attendance/:fdate/:tdate", component: RecordReport }
  // { path: '', redirectTo: 'availableleave/:id', pathMatch: 'full' }
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
    ChartReport,
    MultiChartReport,
    Property
  ],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule, HttpModule,
    RouterModule.forRoot(appRoutes), FormsModule
  ],

  providers: [httpService,timeOfficeService,commonServices,sharedData],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
