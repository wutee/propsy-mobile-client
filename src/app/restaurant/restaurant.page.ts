import {Component} from '@angular/core';
import {RestaurantService} from './service/restaurant.service';
import {FoodInRestaurantPage} from '../food-in-restaurant/food-in-restaurant.page';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {
  restaurants: any;
  restaurantList: boolean;
  title: string;

  constructor(public restProvider: RestaurantService) {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantList = true;
    this.title = 'Restaurants';
    this.restProvider.getRestaurants()
      .subscribe(data => {
        this.restaurants = data;
      });
  }

  getRestaurantFoods(id: number, name: string) {
    this.restaurantList = false;
    this.title = name;
    this.restProvider.setSelectedRestaurant(id);
  }


  backButton() {
    this.restaurantList = true;
  }

}
