import { Component } from '@angular/core';
import {RestaurantService} from '../restaurant/service/restaurant.service';
import {strict} from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
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
        console.log(this.restaurants);
      });
  }

  itemSelected(item: number) {
    this.isList = false;
    console.log('Selected Item', item);
    this.restProvider.getRestaurantDetails(String(item))
      .then(data => {
        this.currentRestaurant = data;
        console.log(this.currentRestaurant);
      });
  }
}
