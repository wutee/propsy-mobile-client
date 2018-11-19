import {Component, Input, OnInit} from '@angular/core';
import {Menu} from './model/menu';
import {BucketService} from '../bucket/service/bucket.service';
import {Router} from '@angular/router';
import {Restaurant, RestaurantResourceService} from '../../client';

@Component({
  selector: 'app-food-in-restaurant',
  templateUrl: './food-in-restaurant.page.html',
  styleUrls: ['./food-in-restaurant.page.scss'],
})
export class FoodInRestaurantPage implements OnInit {

  constructor(public bucketService: BucketService,
              private router: Router, private restaurantService: RestaurantResourceService) {
  }

  // @Input()
  restaurantId: number = 1;
  restaurant: Restaurant;
  isOpenMenu: boolean = true;
  isOpenFood: boolean = true;


  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.restaurantService.getRestaurantUsingGET(this.restaurantId)
      .subscribe(
        response => this.restaurant = response
      )
  }

  toggleMenu(i) {
    this.isOpenMenu = !this.isOpenMenu;
  }

  toggleFood(i, j) {
    this.isOpenFood = !this.isOpenFood;
  }

  addProductToBucket(food) {
    this.bucketService.addProduct(food);
  }

  showBucket() {
    if (this.bucketService.foods.length) {
      this.router.navigateByUrl('/tabs/(bucket:bucket)');
    }
  }

  mock(): void {
  }

}
