import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistEditComponent } from './nutritionist-edit.component';

describe('NutritionistEditComponent', () => {
  let component: NutritionistEditComponent;
  let fixture: ComponentFixture<NutritionistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
