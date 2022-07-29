import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeApproveComponent } from './recipe-approve.component';

describe('RecipeApproveComponent', () => {
  let component: RecipeApproveComponent;
  let fixture: ComponentFixture<RecipeApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
