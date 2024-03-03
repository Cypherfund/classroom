import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  transactions: Transaction[] = [
    { date: '2024-03-01', amount: 50, type: 'payment', courseName: 'Angular Basics' },
    { date: '2024-02-28', amount: 20, type: 'refund', courseName: 'React Fundamentals' },
    // Add more transactions as needed
  ];
}
