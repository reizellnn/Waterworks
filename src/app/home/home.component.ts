/** @format */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.transactions = this.dataService.users[0].transactions;
  }
}
