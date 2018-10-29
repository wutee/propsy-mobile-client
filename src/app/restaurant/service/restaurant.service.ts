import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getRestaurants() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/restaurants').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
