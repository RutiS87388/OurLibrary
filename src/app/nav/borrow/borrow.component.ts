import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  borrowId: number;
  subscriberId: any;
  subscriberName: string;
  subscriberLastName: string;
  bookId: any;
  borrowDate: string;
  beReturnd: any;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { borrowId: 1, subscriberId: 230, subscriberName: 'ruty', subscriberLastName: 'cohen', bookId: 320, borrowDate: '06-11-24', beReturnd: false },
  { borrowId: 2, subscriberId: 230, subscriberName: 'chaya', subscriberLastName: 'levi', bookId: 412, borrowDate: '06-11-24', beReturnd: true },

];


@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrl: './borrow.component.scss',
  imports: [MatTableModule, FormsModule, CommonModule, MatFormFieldModule, MatSelectModule],
})
export class BorrowComponent {
  subscriberName: string = '';
  displayedColumns: string[] = ['borrowId', 'subscriberName', 'subscriberLastName', 'bookId', 'borrowDate', 'beReturnd'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  showAddBookInput: boolean = false;
  borrowName: string = '';
  isDialogOpen: boolean = false;
  newBorrow = { borrowId: 0, subscriberId: 0, subscriberName: '', subscriberLastName: '', bookId: 0, borrowDate: '', beReturnd: true };
  selectedBorrowId: number | null = null;
  filteredDataSource: any[] = this.displayedColumns;


  newSubscriberName: string = '';

  newSubscriberLastName: string = '';
  newBookId: number = 0;
  newBorrowDate: string = '';
  newBeReturnd: boolean = true;

  filter() {
    this.filteredDataSource = this.dataSource.filter(borrow =>
      borrow.subscriberName.toLowerCase().includes(this.subscriberName.toLowerCase())
    );
    this.dataSource = this.filteredDataSource;
    if (this.subscriberName.length == 0) {
      this.dataSource = ELEMENT_DATA;
    }
  }

  clearNewBookInputs() {
    this.newSubscriberName = '';
    this.newSubscriberLastName = '';
    this.newBookId = 0;
    this.newBorrowDate = '';
    this.newBeReturnd = true;

  }
  openDialog() {
    const newBorrow: PeriodicElement = {
      borrowId: Math.floor(Math.random() * 1000000),
      subscriberId: prompt("Enter subscriberId:") || 0,
      subscriberName: prompt("Enter subscriberName:") || '',
      subscriberLastName: prompt("Enter subscriberLastName:") || '',
      bookId: prompt("Enter bookId:") || 0,
      borrowDate: prompt("Enter borrowDate:") || '',
      beReturnd: prompt("Enter beReturnd:") || false
    };

    this.dataSource.push(newBorrow);

  }

  addBorrow() {
    this.dataSource.push({ ...this.newBorrow });
    this.newBorrow = { borrowId: 2, subscriberId: 230, subscriberName: 'chaya', subscriberLastName: 'levi', bookId: 412, borrowDate: '06-11-24', beReturnd: true };

  }
  openEditDialog(borrow: PeriodicElement) {
    this.isDialogOpen = true;
    this.newBorrow = { ...borrow};
    this.selectedBorrowId = borrow.borrowId;
  }
  closeDialog() {
    this.isDialogOpen = false;

  }
  deleteBorrow(borrw: PeriodicElement) {
    this.dataSource = this.dataSource.filter(b => b.borrowId !== borrw.borrowId);
  }

  updateBorrow() {
    if (this.selectedBorrowId !== null) {
      const index = this.dataSource.findIndex(borrow => borrow.borrowId === this.selectedBorrowId);
      if (index !== -1) {
        this.dataSource[index] = { ...this.newBorrow, borrowId: this.selectedBorrowId };
      }
    }
    this.closeDialog();
  }

}

