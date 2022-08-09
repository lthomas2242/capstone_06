import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDataListComponent } from './recipe-data-list.component';

describe('RecipeDataListComponent', () => {
  let component: RecipeDataListComponent;
  let fixture: ComponentFixture<RecipeDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
