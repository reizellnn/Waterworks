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

  balance: any = {};
  haveBalance: boolean = false;

  constructor(private dataService: DataService) {
    let userID = localStorage.getItem('userId')?.toString();

    if (userID) {
      this.balance = this.dataService.getBalance(userID);

      this.haveBalance = Object.keys(this.balance).length > 0;
      console.log(this.balance != null);
    }

    console.log(this.balance, 'ywaw');
  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction() {
    let userID = localStorage.getItem('userId')?.toString();
    if (userID) {
      this.transactions = this.dataService.getTransactions(userID, 3);
    }
  }

  formatDate(paymentDate: string): string {
    //if valid date

    if (!paymentDate) {
      return '';
    }

    const date = new Date(paymentDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }

  getUpdatedDate(date: string, numberOfDaysToAdd: number): string {
    const dateParts = date.split('-');
    const month = Number(dateParts[0]) - 1;
    const day = Number(dateParts[1]);
    const year = Number(dateParts[2]);

    const currentDate = new Date(year, month, day);
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);

    return `${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}-${currentDate.getFullYear()}`;
  }
}
