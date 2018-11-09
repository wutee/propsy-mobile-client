import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
  }

  getOrders() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/orders').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
