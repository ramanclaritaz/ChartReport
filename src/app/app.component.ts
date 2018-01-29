import { Component } from '@angular/core';
import { reportInfo } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  reportInfo: any;

  constructor() {
    this.reportInfo = reportInfo;

  }
}
