import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCustomerComponent } from './book-customer.component';

describe('BookCustomerComponent', () => {
  let component: BookCustomerComponent;
  let fixture: ComponentFixture<BookCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
