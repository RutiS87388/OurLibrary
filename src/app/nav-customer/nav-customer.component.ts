import { Component, inject } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookCustomerComponent } from './book-customer/book-customer.component';
import { HistoryCustomerComponent } from './history-customer/history-customer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-nav-customer',
  imports: [MatCommonModule, RouterModule, NavbarComponent],
  templateUrl: './nav-customer.component.html',
  styleUrl: './nav-customer.component.scss'
})
export class NavCustomerComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    const childRoutes = ['/history-customer', '/bookCustomer'];
  }
  change(path: string) {
    this.router.navigate(['/nav-customer', path]);
  }
}
