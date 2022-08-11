import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeEditComponent } from './my-recipe-edit.component';

describe('MyRecipeEditComponent', () => {
  let component: MyRecipeEditComponent;
  let fixture: ComponentFixture<MyRecipeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecipeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
