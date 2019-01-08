import {Component} from '@angular/core';
import {RestaurantService} from './restaurant.service';
import {Restaurant} from '../../client';
import {BucketService} from '../bucket/bucket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})

export class RestaurantPage {
  restaurants: Restaurant[];
  restaurantList: boolean;
  title: string;

  constructor(
    public restProvider: RestaurantService,
    public bucketService: BucketService,
    private router: Router
  ) {
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
  }r

  backButton() {
    if (this.bucketService.getFoods().length == 0) {
      this.title = 'Restaurants';
      this.restaurantList = true;
    }
  }

}
