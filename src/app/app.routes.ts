import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),

  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),

  },
  {
    path: 'information',
    loadComponent: () =>
      import('./information/information.component').then((m) => m.InformationComponent),

  },
  {
    path: 'service',
    loadComponent: () =>
      import('./service/service.component').then((m) => m.ServiceComponent),

  },

  {
    path: 'new-customer',
    loadComponent: () =>
      import('./new-customer/new-customer.component').then(m => m.NewCustomerComponent)
  },



  {
    path: 'nav',
    loadComponent: () =>
      import('./nav/nav.component').then(m => m.NavComponent)

  },
  {
    path: 'new-book',
    loadComponent: () =>
      import('./new-book/new-book.component').then(m => m.NewBookComponent)
  },
  {
    path: 'nav',
    loadComponent: () =>
      import('./nav/nav.component').then((m) => m.NavComponent),
    children: [
      {
        path: 'books',
        loadComponent: () =>
          import('./nav/books/books.component').then(m => m.BooksComponent),
      },
      {
        path: 'borrow',
        loadComponent: () =>
          import('./nav/borrow/borrow.component').then(m => m.BorrowComponent),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./nav/customers/customers.component').then(m => m.CustomersComponent),
      },
    ]

  },
  {
    path: 'nav-customer',
    loadComponent: () =>
      import('./nav-customer/nav-customer.component').then(m => m.NavCustomerComponent)

  },

  {
    path: 'nav-customer',
    loadComponent: () =>
      import('./nav-customer/nav-customer.component').then((m) => m.NavCustomerComponent),
    children: [
      {
        path: 'bookCustomer',
        loadComponent: () =>
          import('./nav-customer/book-customer/book-customer.component').then(m => m.BookCustomerComponent),
      },


      {
        path: 'history-customer',
        loadComponent: () =>
          import('./nav-customer/history-customer/history-customer.component').then(m => m.HistoryCustomerComponent),
      },
      
    ]
  }]
  


