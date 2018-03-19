import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  time: string;
  nonUniqArray = [5, 3, 6, 1, 1, 5, 2];
  uniqArray = [];

  constructor() { }

  ngOnInit() {
    // Moment
    this.time = moment().format('HH:mm DD/MM/YYYY');
    // Lodash
    this.uniqArray = _.uniq(this.nonUniqArray);
  }

}
