import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodOrder, FoodOrderResourceService} from '../../../client';
import {map, tap} from 'rxjs/operators';
import {AuthService} from '../../components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private foodOrders;
  private myAccount;

  constructor(
    public http: HttpClient,
    public foodOrderResourceService: FoodOrderResourceService,
    public authService: AuthService
  ) {
  }


  getOrders() {
    this.authService.me().subscribe(() => {
      this.myAccount = this.authService.whoAmI();
    });
    return this.foodOrderResourceService.getAllFoodOrdersUsingGET()
      .pipe(
        map(i => i.filter(a => a.restaurant != null && a.purchaser != null && (this.myAccount.id === a.purchaser.id))),
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
