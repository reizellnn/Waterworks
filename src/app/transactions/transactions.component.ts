import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  transactions: any = [];

  ngOnInit() {
    this.transactions = this.getTransactions();
  }

  getTransactions() {
    let transactions: any[] = [];
    let userId = localStorage.getItem('userId');
    if (userId != null) {
      transactions = this.dataService.getAllTransactions(userId);
    }
    return transactions;
  }

  formatDate(paymentDate: string): string {
    const date = new Date(paymentDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }

  searchTerm: string = '';

  handleInput(event: any) {
    //Kunin lahat ng transacations na naka display sa HTML
    const labels = Array.from(document.querySelectorAll('.transaction-label'));

    //Isa isa silang i-check ang transactions
    labels.forEach((label) => {
      //kunin lahat ng text sa loob ng transactions
      const item = label.parentElement;
      //pag walang input dun sa search ay hindi matutuloy ang search
      if (item == null || label.textContent == null) {
        return;
      }
      //pero kungtuloy ay icheck kung may match sa search
      if (label.textContent.toLowerCase().indexOf(event.target.value) > -1) {
        item.style.display = 'block'; //lahat ng match ay ishow
      } else {
        item.style.display = 'none'; //lahat ng hindi match ay itago
      }
    });
  }
}
