import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { BooksComponent } from '../books/books.component';

export interface PeriodicElement {
  subscriberId: number;
  subscriberName: string;
  subscriberLastName: string;
  subscriberEmail: string;
  subscriberPhone: string;
  subscriberAddress: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { subscriberId: 328287388, subscriberName: 'ruty', subscriberLastName: 'Shtainmetzh', subscriberEmail: 'r@gmail.com', subscriberPhone: '0534198518', subscriberAddress: 'Calanit' },
  { subscriberId: 2, subscriberName: 'Shtainmetzh', subscriberLastName: 'cohen', subscriberEmail: 'Chaya@gmail.com', subscriberPhone: '0548583514', subscriberAddress: 'Vered' },
  { subscriberId: 3, subscriberName: 'chaya', subscriberLastName: 'Shtainmetzh', subscriberEmail: 'ruty@gmail.com', subscriberPhone: '088039065', subscriberAddress: 'Charuv' },
  { subscriberId: 4, subscriberName: 'Rozen', subscriberLastName: 'Shtainmetzh', subscriberEmail: 'Rozen@gmail.com', subscriberPhone: '0556793185', subscriberAddress: 'irit' },
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  imports: [MatTableModule, FormsModule, CommonModule],
})
export class CustomersComponent {
  router = inject(Router);
  dialog = inject(MatDialog);
  filterArray: PeriodicElement[] = [];
  displayedColumns: string[] = ['subscriberId', 'subscriberName', 'subscriberLastName', 'subscriberEmail', 'subscriberPhone', 'subscriberAddress', 'delete'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  customerName: string = '';
  isDialogOpen: boolean = false;
  selectedCustomerId: number | null = null;


  newCustomer: PeriodicElement = { subscriberId: 0, subscriberName: '', subscriberLastName: '', subscriberEmail: '', subscriberPhone: '', subscriberAddress: '' };

  deleteCustomer(customer: PeriodicElement) {
    this.dataSource = this.dataSource.filter(b => b.subscriberName !== customer.subscriberName);
  }

  filter() {
    this.dataSource = this.dataSource.filter(customer =>
      customer.subscriberName.toLowerCase().includes(this.customerName.toLowerCase()) 
      // customer.subscriberLastName.toLowerCase().includes(this.customerName.toLowerCase())
    );
    if (this.customerName.length == 0) {
      this.dataSource = ELEMENT_DATA;
    }
  }

  openDialog() {
    const newCustomer: PeriodicElement = {
      subscriberId: Math.floor(Math.random() * 1000000),
      subscriberName: prompt("Enter Subscriber Name:") || '',
      subscriberLastName: prompt("Enter Subscriber Last Name:") || '',
      subscriberEmail: prompt("Enter Subscriber Email:") || '',
      subscriberPhone: prompt("Enter Subscriber Phone:") || '',
      subscriberAddress: prompt("Enter Subscriber Address:") || ''
    };
    this.dataSource.push(newCustomer);
  }  

  addCustomer() {
    this.dataSource.push({ ...this.newCustomer });
    this.newCustomer = { subscriberId: 0, subscriberName: '', subscriberLastName: '', subscriberEmail: '', subscriberPhone: '', subscriberAddress: '' };
  }
  openEditDialog(customer: PeriodicElement) {
    this.isDialogOpen = true;
    this.newCustomer = { ...customer};
    this.selectedCustomerId = customer.subscriberId;
  }
  closeDialog() {
    this.isDialogOpen = false;

  }


  updateCustomer() {
    if (this.selectedCustomerId !== null) {
      const index = this.dataSource.findIndex(customer => customer.subscriberId === this.selectedCustomerId);
      if (index !== -1) {
        this.dataSource[index] = { ...this.newCustomer, subscriberId: this.selectedCustomerId };
      }
    }
    this.closeDialog();
  }
  openBooksDialog(customer: PeriodicElement) {
    // Open the BooksComponent dialog here
    const dialogRef = this.dialog.open(BooksComponent);
    
    dialogRef.componentInstance.bookSelected.subscribe((book: any) => {
      this.addBorrowingRecord(customer, book);
      dialogRef.close();
    });
  }
  
  addBorrowingRecord(customer: PeriodicElement, book: any) {
    // Logic to add borrowing record
    console.log(`Customer ${customer.subscriberName} borrowed ${book.title}`);
  }
}