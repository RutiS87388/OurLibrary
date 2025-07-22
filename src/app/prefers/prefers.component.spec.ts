import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefersComponent } from './prefers.component';

describe('PrefersComponent', () => {
  let component: PrefersComponent;
  let fixture: ComponentFixture<PrefersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
