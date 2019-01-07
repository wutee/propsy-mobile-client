import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {BucketPage} from "../../bucket/bucket.page";
import {BucketService} from "../../bucket/service/bucket.service";
import {RestaurantService} from "../../restaurant/service/restaurant.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  static customer: Customer;
  public error: boolean = false;

  constructor(public restaurantService: RestaurantService, private router: Router) {
  }

  doSomethingWithCustomerAddress(customer: Customer) {
    OrderFormService.customer = customer;
    return customer;
  }

  makeOrder() {
    const restaurant = this.restaurantService.restaurants.find((restaurant) => restaurant.id === this.restaurantService.id);
    const body = {
      date: "2019-01-09",
      address: OrderFormService.customer.address + " " + OrderFormService.customer.zipCode,
      city: OrderFormService.customer.city,
      status: "NEW",
      price: BucketPage.sum,
      foodItems: BucketService.foods,
      restaurant: restaurant,
    };

    fetch("https://propsy-backend-jwt.herokuapp.com/api/food-orders", {
      "credentials": "include",
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
        "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0Njg4NTgyMH0.Y7A0Wn1bEYHLAzlTHHrnU4Tx-SyZY6bxaIENeXzE6hXtlp5P91DPvOhxcaCa4K8fvEaJrA_iYz2Mx-ArN51AIQ",
        "content-type": "application/json",
      },
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": JSON.stringify(body),
      "method": "POST",
      "mode": "cors"
    }).then(
      () => {
        BucketService.foods = [];
        this.error = false;
        this.router.navigateByUrl('/tabs/(orders:orders)');
      },
      () => {
        this.error = true;
      }
    );
  }
}
