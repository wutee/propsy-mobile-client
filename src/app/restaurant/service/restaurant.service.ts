import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantResourceService} from '../../../client';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  id: number;

  constructor(public http: HttpClient, public restaurantService: RestaurantResourceService) {
  }

  getRestaurants() {
    return this.restaurantService.getAllRestaurantsUsingGET();
  }


  setSelectedRestaurant(id: number) {
    this.id = id;
  }
}
