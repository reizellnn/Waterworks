/** @format */

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    transactions: any[] = [
        {
            title: 'Failed',
            date: 'June 2023',
            amount: '1000.00',
            failed: true,
        },
        {
            title: 'Payment Successful',
            date: 'May 2023',
            amount: '2000.00',
            failed: false,
        },
        {
            title: 'Payment Successful',
            date: 'April 2023',
            amount: '1500.00',
            failed: false,
        },
        {
            title: 'Payment Successful',
            date: 'March 2023',
            amount: '1200.00',
            failed: false,
        },
        {
            title: 'Payment Successful',
            date: 'February 2023',
            amount: '1800.00',
            failed: false,
        },
        {
            title: 'Payment Successful',
            date: 'January 2023',
            amount: '1000.00',
            failed: false,
        },
    ];
    constructor() {}

    ngOnInit() {}
}
