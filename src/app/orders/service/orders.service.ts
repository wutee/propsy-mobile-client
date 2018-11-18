import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FoodResourceService} from "../../../client";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient, public ss: FoodResourceService) {
  }

  getOrders() {
    return new Promise(resolve => {
      this.ss.getAllFoodsUsingGET().subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log("DUPA");
        console.log(err);
      });
    });
  }
}
