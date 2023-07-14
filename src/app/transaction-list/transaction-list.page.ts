import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) {}
  transactions: any[] = [];

  ngOnInit() {
    if (localStorage.getItem('selectedID') == null) {
      this.router.navigateByUrl('/folder/accounts');
    }
    this.transactions = this.getTransactions();
  }

  getTransactions() {
    //get the id of selected user from local storage
    const id = localStorage.getItem('selectedID');
    if (id != null) {
      //loop through the users array
      for (let i = 0; i < this.dataService.users.length; i++) {
        //if the id of the user matches the id of the selected user
        if (this.dataService.users[i].id == id) {
          //return the transactions of the user
          return this.dataService.users[i].transactions;
        }
      }
    }
  }

  async confirmPayment(transaction: any) {
    // Display alert for confirmation
    const confirmAlert = await this.alertController.create({
      header: 'Confirm Payment',
      message: `Are you sure you want to confirm payment for ${transaction.title}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.printConfirmation(transaction);
          },
        },
      ],
    });

    await confirmAlert.present();
  }

  return() {
    localStorage.removeItem('selectedID');
    this.router.navigateByUrl('/folder/accounts');
  }

  printConfirmation(transaction: any) {
    //get the id of selected user
    const id = localStorage.getItem('selectedID');
    console.log(id);
    //loop through the users array
    for (let i = 0; i < this.dataService.users.length; i++) {
      //if the id of the user matches the id of the selected user
      if (this.dataService.users[i].id == id) {
        //loop through the transactions of the user
        for (
          let j = 0;
          j < this.dataService.users[i].transactions.length;
          j++
        ) {
          //if the title of the transaction matches the title of the selected transaction
          if (
            this.dataService.users[i].transactions[j].title == transaction.title
          ) {
            //change the status of the transaction to 'Confirmed'
            this.dataService.users[i].transactions[j].title =
              'Payment Successful';
            //break the loop
            break;
          }
        }
      }
    }
    //print users array
    console.log(this.dataService.users[0].transactions);

    //alert the user that the payment has been confirmed
    this.alertController
      .create({
        header: 'Payment Confirmed',
        message: `Payment for ${transaction.title} has been confirmed.`,
        buttons: ['OK'],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
