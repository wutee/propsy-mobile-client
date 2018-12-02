import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FoodOrder, FoodOrderResourceService} from "../../../client";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // foodOrderResourceService: FoodOrderResourceService;

  constructor(public http: HttpClient, public foodOrderResourceService: FoodOrderResourceService) {
    // let configuration =
    // this.foodOrderResourceService = new FoodOrderResourceService(http, undefined, );
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

  saveOrder(foodOrder: FoodOrder) {
    this.http.get('https://propsy-backend-v0.herokuapp.com/api/authenticate?j_username=admin&j_password=admin').subscribe((data) => console.log(data));
    // document.cookie.
    return new Promise(resolve => {
      this.foodOrderResourceService.createFoodOrderUsingPOST(foodOrder).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
