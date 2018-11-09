import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FoodInRestaurantPage} from './food-in-restaurant.page';

xdescribe('FoodInRestaurantPage', () => {
  let component: FoodInRestaurantPage;
  let fixture: ComponentFixture<FoodInRestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInRestaurantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodInRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
