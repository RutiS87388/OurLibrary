import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutyComponent } from './ruty.component';

describe('RutyComponent', () => {
  let component: RutyComponent;
  let fixture: ComponentFixture<RutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
