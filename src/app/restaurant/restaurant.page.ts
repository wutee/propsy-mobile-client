import { Component } from '@angular/core';
import {RestaurantService} from './service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {
  restaurants: any;
  isList: boolean;

  constructor(public restProvider: RestaurantService) {
    this.getRestaurants();
  }

  getRestaurants() {
    this.isList = true;
    this.restProvider.getRestaurants()
      .then(data => {
        this.restaurants = data;
      });
  }
}
