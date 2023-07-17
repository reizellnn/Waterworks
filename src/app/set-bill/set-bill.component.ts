import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-set-bill',
  templateUrl: './set-bill.component.html',
  styleUrls: ['./set-bill.component.scss'],
})
export class SetBillComponent implements OnInit {
  ngOnInit() {
    this.getInfo();
  }
  ionViewDidEnter() {
    console.log('Executing code on page enter');
  }
  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) {}
  userSelection: any = [];
  getInfo() {
    for (let i = 0; i < this.dataService.users.length; i++) {
      let addUser = {
        id: '',
        name: '',
      };
      addUser.name = this.dataService.users[i].name;
      addUser.id = this.dataService.users[i].id;
      this.userSelection.push(addUser);
    }
  }
  userID: string = '';
  selectedDate: string = new Date().toISOString(); // Initialize with the current date
  consumption: number = 0;
  rate: number = 20.3;
  total: number = 0;

  onDateChange(event: any) {
    console.log('Selected Date:', this.selectedDate);
  }

  onCheckChange(event: any) {
    let ans = this.rate * this.consumption;
    this.total = +ans.toFixed(2);
  }
  async setBill() {
    if (!this.userID) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please select a user',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    let date = new Date(this.selectedDate);
    this.selectedDate = date.toISOString().split('T')[0];

    const bill = {
      title: 'Not Paid',
      date: this.selectedDate.toString(),
      consumption: this.consumption,
      rate: this.rate,
      amount: this.total,
      paymentDate: '',
    };

    console.log(bill);

    console.log(this.userID);

    for (let i = 0; i < this.dataService.users.length; i++) {
      if (this.dataService.users[i].id == this.userID) {
        console.log(this.dataService.users[i]);
        this.dataService.users[i].transactions.push(bill);
        break;
      }
    }

    // Navigate to the desired route
    this.router.navigate(['/folder/accounts']);
  }
}
