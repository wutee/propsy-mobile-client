import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantResourceService} from '../../client';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  id: number;
  restaurants: any[];

  constructor(public http: HttpClient, public restaurantService: RestaurantResourceService) {
  }

  async getRestaurants() {
    await this.restaurantService.getAllRestaurantsUsingGET().subscribe(data => {
      this.restaurants = data;
    });
  }

  setSelectedRestaurant(id: number) {
    this.id = id;
  }
}
