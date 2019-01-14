import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {BucketPage} from '../bucket/bucket.page';
import {BucketService} from '../bucket/bucket.service';
import {RestaurantService} from '../restaurant/restaurant.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  static customer: Customer;
  public error = false;

  constructor(
    public restaurantService: RestaurantService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  doSomethingWithCustomerAddress(customer: Customer) {
    OrderFormService.customer = customer;
    return customer;
  }

  makeOrder() {
    const restaurant = this.restaurantService.restaurants
      .find(
        (r) => r.id === this.restaurantService.id
      );
    const body = {
      date: new Date(),
      address: OrderFormService.customer.address + ' ' + OrderFormService.customer.zipCode,
      city: OrderFormService.customer.city,
      status: 'NEW',
      price: BucketPage.sum,
      foodItems: BucketService.foods,
      restaurant: restaurant,
    };

    // this.http.post('https://propsy-backend-jwt.herokuapp.com/api/food-orders', body)
    //   .pipe(
    //     tap(data => {
    //       BucketService.foods = [];
    //       this.error = false;
    //       this.router.navigateByUrl('/tabs/(orders:orders)');
    //     })
    //   );

    // return this.http.post('api/food-orders', body)
    //   .pipe(
    //     tap(data => {
    //       BucketService.foods = [];
    //       this.error = false;
    //       this.router.navigateByUrl('/tabs/(orders:orders)');
    //     })
    //   );

    fetch('https://propsy-backend-jwt.herokuapp.com/api/food-orders', {
      'credentials': 'include',
      'headers': {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
        'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0Njg4NTgyMH0.Y7A0Wn1bEYHLAzlTHHrnU4Tx-SyZY6bxaIENeXzE6hXtlp5P91DPvOhxcaCa4K8fvEaJrA_iYz2Mx-ArN51AIQ',
        'content-type': 'application/json',
      },
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': JSON.stringify(body),
      'method': 'POST',
      'mode': 'cors'
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
