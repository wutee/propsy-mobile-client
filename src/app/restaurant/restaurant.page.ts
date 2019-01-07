import {Component} from '@angular/core';
import {RestaurantService} from './service/restaurant.service';
import {Restaurant} from '../../client';
import {BucketService} from "../bucket/service/bucket.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})

export class RestaurantPage {
  restaurants: Restaurant[];
  restaurantList: boolean;
  title: string;

  constructor(public restProvider: RestaurantService, public bucketService: BucketService) {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantList = true;
    this.title = 'Restaurants';
    this.restProvider.getRestaurants();
  }

  getRestaurantFoods(id: number, name: string) {
    this.restaurantList = false;
    this.title = name;
    this.restProvider.setSelectedRestaurant(id);
  }

  backButton() {
    if (this.bucketService.getFoods().length == 0) {
      this.title = 'Restaurants';
      this.restaurantList = true;
    }
  }

}
