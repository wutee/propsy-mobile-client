import {Component, Input, OnInit} from '@angular/core';
import {BucketService} from '../bucket/bucket.service';
import {Router} from '@angular/router';
import {MenuResourceService, Menu, Food} from '../../client';
import {RestaurantService} from '../restaurant/restaurant.service';

@Component({
  selector: 'app-food-in-restaurant',
  templateUrl: './food-in-restaurant.page.html',
  styleUrls: ['./food-in-restaurant.page.scss'],
})
export class FoodInRestaurantPage implements OnInit {

  constructor(
    public bucketService: BucketService,
    private router: Router,
    private menuService: MenuResourceService,
    private restaurantService: RestaurantService
  ) {
  }

  @Input()
  restaurantId: number = this.restaurantService.id;
  menus: Menu[] = [];
  currentMenu: Menu;
  currentFood: Food;


  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getAllMenusUsingGET()
      .subscribe(
        response => {
          this.menus = response.filter(
            menu => menu.restaurant.id === this.restaurantId
          );
        }
      );
  }

  toggleMenu(menu: Menu) {
    if (this.currentMenu == menu) {
      this.currentMenu = null;
    } else {
      this.currentMenu = menu;
    }
  }

  toggleFood(food: Food) {
    if (this.currentFood == food) {
      this.currentFood = null;
    } else {
      this.currentFood = food;
    }
  }

  addProductToBucket(food) {
    this.bucketService.addProduct(food);
  }

  showBucket() {
    if (BucketService.foods.length) {
      this.router.navigateByUrl('/tabs/(bucket:bucket)');
    }
  }

  mock(): void {
  }

}
