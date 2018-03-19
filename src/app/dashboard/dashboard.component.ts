import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  time: string;

  constructor() { }

  ngOnInit() {
    this.time = moment().format('HH:mm DD/MM/YYYY');
  }

}
