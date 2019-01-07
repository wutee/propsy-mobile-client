import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodOrder, FoodOrderResourceService} from '../../../client';
import {map, tap} from 'rxjs/operators';
import {OrderStatus} from '../../order-status.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private foodOrders;

  constructor(
    public http: HttpClient,
    public foodOrderResourceService: FoodOrderResourceService
  ) {
  }

  getOrders() {
    return this.foodOrderResourceService.getAllFoodOrdersUsingGET()
      .pipe(
        map(i => i.filter(a => a.restaurant != null)),
        tap(i => {
          this.foodOrders = i;
        })
      );
  }

  saveOrder(foodOrder: FoodOrder) {
    return new Promise(resolve => {
      this.foodOrderResourceService.createFoodOrderUsingPOST(foodOrder).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
