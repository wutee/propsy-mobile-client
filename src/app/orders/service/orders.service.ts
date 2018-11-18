import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FoodOrderResourceService} from "../../../client";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http: HttpClient, public foodOrderResourceService: FoodOrderResourceService) {
  }

  getOrders() {
    return new Promise(resolve => {
      this.foodOrderResourceService.getAllFoodOrdersUsingGET().subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
