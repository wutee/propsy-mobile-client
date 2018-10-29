import { Component } from '@angular/core';
import {RestaurantService} from '../restaurant/service/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  restaurants: any;

  constructor(public restProvider: RestaurantService) {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restProvider.getRestaurants()
      .then(data => {
        this.restaurants = data;
        console.log(this.restaurants);
      });
  }

  itemSelected(item: string) {
    console.log('Selected Item', item);
  }
}
