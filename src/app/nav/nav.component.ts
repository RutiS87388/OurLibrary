import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
// import { CustomersComponent } from './customers/customers.component';
// import { BooksComponent } from './books/books.component';
// import { BorrowComponent } from './borrow/borrow.component';
import { NavbarComponent } from '../navbar/navbar.component';




@Component({
  selector: 'app-nav',
  imports: [MatTabsModule, CommonModule, RouterModule, NavbarComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    const childRoutes = ['/books', '/borrow', '/customers'];
  }
  change(path: string) {
    this.router.navigate(['/nav', path]);
  }


}
