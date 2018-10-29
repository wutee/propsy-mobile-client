import { TestBed } from '@angular/core/testing';

import { FoodInRestaurantService } from './food-in-restaurant.service';

xdescribe('FoodInRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodInRestaurantService = TestBed.get(FoodInRestaurantService);
    expect(service).toBeTruthy();
  });
});
