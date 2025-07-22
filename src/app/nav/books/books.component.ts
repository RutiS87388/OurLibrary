import { Component, EventEmitter, Output } from '@angular/core';
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
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [MatTableModule, MatFormFieldModule, MatSelectModule, MatButtonModule, CommonModule, FormsModule],
})
export class BooksComponent {
  @Output() bookSelected = new EventEmitter<any>();

  dataSource = ELEMENT_DATA;
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  message = ' ';
  filterArray: PeriodicElement[] = [];
  clickedRows = new Set<PeriodicElement>();
  displayedColumns: string[] = ['id', 'name', 'writerName', 'publishingDate', 'categoryName', 'ageName', 'copies', 'copiesInLibrary', 'availabloToBorrow', 'delete'];
  bookName: string = '';
  isDialogOpen: boolean = false;
  selectedBookId: number | null = null;
  newBook: PeriodicElement = { id: 0, name: '', writerName: '', publishingDate: '', categoryName: '', ageName: '', copies: 0, copiesInLibrary: 0, availabloToBorrow: false };

  filteredDataSource: any[] = this.displayedColumns;
  router = inject(Router);
  dialog = inject(MatDialog);

  deleteBook(book: PeriodicElement) {
    this.dataSource = this.dataSource.filter(b => b.id !== book.id);
  }

  selectBook(book: PeriodicElement) {
    console.log(book); // בדוק אם הספר כולל את המאפיינים הנדרשים
    this.bookSelected.emit(book);
  }
  

  filter() {
    this.filteredDataSource = this.dataSource.filter(book =>
      book.name.toLowerCase().includes(this.bookName.toLowerCase())
    );
    this.dataSource = this.filteredDataSource;
    if (this.bookName.length == 0) {
      this.dataSource = ELEMENT_DATA;
    }
  }

  openDialog() {
    const newBook: PeriodicElement = {
      id: Math.floor(Math.random() * 1000000),
      name: prompt("Enter Book Name:") || '',
      writerName: prompt("Enter writerName:") || '',
      publishingDate: prompt("Enter publishingDate:") || '',
      categoryName: prompt("Enter categoryName:") || '',
      ageName: prompt("Enter ageName:") || '',
      copies: prompt("Enter copies:") || 0,
      copiesInLibrary: prompt("Enter copiesInLibrary:") || 0,
      availabloToBorrow: prompt("Enter availabloToBorrow:") || false
    };

    this.dataSource.push(newBook);

  }  
  
  addBook() {
    this.dataSource.push({ ...this.newBook });
    this.newBook = { id: 0, name: '', writerName: '', publishingDate: '', categoryName: '', ageName: '', copies: 0,copiesInLibrary:0, availabloToBorrow:false};
  }
  openEditDialog(book: PeriodicElement) {
    this.isDialogOpen = true;
    this.newBook = { ...book };
    this.selectedBookId = book.id;
  }

  closeDialog() {
    this.isDialogOpen = false;

  }

  updateBook() {
    if (this.selectedBookId !== null) {
      const index = this.dataSource.findIndex(book => book.id === this.selectedBookId);
      if (index !== -1) {
        this.dataSource[index] = { ...this.newBook, id: this.selectedBookId };
      }
    }
    this.closeDialog();
  }
}