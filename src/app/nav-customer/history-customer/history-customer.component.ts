import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { inject } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { NewBookComponent } from '../../new-book/new-book.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  name: string;
  writerName: string;
  publishingDate: string;
  categoryName: string;
  ageName: string;
  copies: any;
  copiesInLibrary: any;
  availabloToBorrow: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Dam Kar', writerName: 'maya keinan', publishingDate: '03-02-25', categoryName: 'מתח', ageName: 'teen', copies: 5, copiesInLibrary: 3, availabloToBorrow: true },
  { id: 2, name: 'Lev Shel kerach', writerName: 'yona sapir', publishingDate: '11-02-25', categoryName: 'רגש', ageName: 'adult', copies: 4, copiesInLibrary: 2, availabloToBorrow: true },
  { id: 3, name: 'Echad echad', writerName: 'tamar mor', publishingDate: '03-02-25', categoryName: 'עיון', ageName: 'kids', copies: 6, copiesInLibrary: 3, availabloToBorrow: true },
];
@Component({
  selector: 'app-history-customer',
  imports: [MatTableModule, MatFormFieldModule, MatSelectModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './history-customer.component.html',
  styleUrl: './history-customer.component.scss'
})
export class HistoryCustomerComponent {
  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['id', 'name', 'writerName', 'publishingDate', 'categoryName', 'ageName', 'copies', 'copiesInLibrary', 'availabloToBorrow', 'delete'];
  filteredDataSource: any[] = this.displayedColumns;
  bookName: string = '';

  filter() {
    this.filteredDataSource = this.dataSource.filter(book =>
      book.name.toLowerCase().includes(this.bookName.toLowerCase())
    );
    this.dataSource = this.filteredDataSource;
    if (this.bookName.length == 0) {
      this.dataSource = ELEMENT_DATA;
    }
  }
}
