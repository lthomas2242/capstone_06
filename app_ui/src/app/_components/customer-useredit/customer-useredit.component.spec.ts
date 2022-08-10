import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUsereditComponent } from './customer-useredit.component';

describe('CustomerUsereditComponent', () => {
  let component: CustomerUsereditComponent;
  let fixture: ComponentFixture<CustomerUsereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUsereditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerUsereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
