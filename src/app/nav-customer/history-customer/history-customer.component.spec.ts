import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCustomerComponent } from './history-customer.component';

describe('HistoryCustomerComponent', () => {
  let component: HistoryCustomerComponent;
  let fixture: ComponentFixture<HistoryCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
