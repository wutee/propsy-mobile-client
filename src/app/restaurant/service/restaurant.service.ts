import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  id: number;

  constructor(public http: HttpClient) {
  }

  getRestaurants() {
    return this.http.get('api/restaurants');
  }


  setSelectedRestaurant(id: number) {
    this.id = id;
  }
}
