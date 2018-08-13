import { Component, OnInit, ViewChild } from '@angular/core';
import { Rate } from './rate';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { RateService } from './rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-angular';
  dataSource = new MatTableDataSource<Rate>(ELEMENT_DATA);
  // rate: Rate;

  displayedColumns = ['price', 'dateTime'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Rate[] = [
  { 'ticker': { 'price': '6455.68688344' }, 'timestamp': 1534187861 },
  { 'ticker': { 'price': '6452.68688344' }, 'timestamp': 1536147861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
  { 'ticker': { 'price': '6451.68688344' }, 'timestamp': 1534167861 },
];
