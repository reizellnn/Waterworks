import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public users = [
    {
      name: 'Jane Smith',
      username: 'janesmith',
      contact: '+9876543210',
      password: 'mypassword123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          amount: '2500.00',
          failed: false,
        },
        {
          title: 'Failed',
          date: 'June 2023',
          amount: '1500.00',
          failed: true,
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
          amount: '1800.00',
          failed: false,
        },
      ],
    },
    {
      name: 'Mark Johnson',
      username: 'markjohnson',
      contact: '+5555555555',
      password: 'password123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          amount: '3000.00',
          failed: false,
        },
        {
          title: 'Payment Successful',
          date: 'June 2023',
          amount: '2200.00',
          failed: false,
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
          amount: '1700.00',
          failed: false,
        },
        {
          title: 'Failed',
          date: 'April 2023',
          amount: '1200.00',
          failed: true,
        },
      ],
    },
    {
      name: 'Jane Smith',
      username: 'janesmith',
      contact: '+9876543210',
      password: 'mypassword123',
      transactions: [
        {
          title: 'Payment Successful',
          date: 'July 2023',
          amount: '2500.00',
          failed: false,
        },
        {
          title: 'Failed',
          date: 'June 2023',
          amount: '1500.00',
          failed: true,
        },
        {
          title: 'Payment Successful',
          date: 'May 2023',
          amount: '1800.00',
          failed: false,
        },
      ],
    },
  ];

  public selectedUser: any = null;

  constructor() {}
}
