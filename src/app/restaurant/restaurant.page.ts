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
  currentRestaurant: any;

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

  itemSelected(item: number) {
    this.isList = false;
    console.log('Selected Item', item);
    this.restProvider.getRestaurantDetails(String(item))
      .then(data => {
        this.currentRestaurant = data;
      });
  }
}
