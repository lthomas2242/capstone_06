import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListResultComponent } from './recipe-list-result.component';

describe('RecipeListResultComponent', () => {
  let component: RecipeListResultComponent;
  let fixture: ComponentFixture<RecipeListResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
