import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListCriteriaComponent } from './recipe-list-criteria.component';

describe('RecipeListCriteriaComponent', () => {
  let component: RecipeListCriteriaComponent;
  let fixture: ComponentFixture<RecipeListCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeListCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
