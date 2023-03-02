import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIngredientComponent } from './insert-ingredient.component';

describe('InsertIngredientComponent', () => {
  let component: InsertIngredientComponent;
  let fixture: ComponentFixture<InsertIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
