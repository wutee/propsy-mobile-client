import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl = 'http://localhost:3000/api';
  id: number;

  constructor(public http: HttpClient) {
  }

  getRestaurants() {
    return this.http.get(this.apiUrl + '/restaurants');
  }


  setSelectedRestaurant(id: number) {
    this.id = id;
  }
}
