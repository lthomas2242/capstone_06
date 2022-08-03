import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculatorComponent } from './bmi-calculator.component';

describe('BMICalculatorComponent', () => {
  let component: BMICalculatorComponent;
  let fixture: ComponentFixture<BMICalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMICalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMICalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
