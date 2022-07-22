import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSaveComponent } from './recipe-save.component';

describe('RecipeSaveComponent', () => {
  let component: RecipeSaveComponent;
  let fixture: ComponentFixture<RecipeSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
