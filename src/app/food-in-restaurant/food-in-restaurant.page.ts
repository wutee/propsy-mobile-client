import {Component, Input, OnInit} from '@angular/core';
import {FoodInRestaurantService} from "./service/food-in-restaurant.service";
import {Food} from "./model/food";
import {Menu} from "./model/menu";

@Component({
  selector: 'app-food-in-restaurant',
  templateUrl: './food-in-restaurant.page.html',
  styleUrls: ['./food-in-restaurant.page.scss'],
})
export class FoodInRestaurantPage implements OnInit {

  constructor(private foodInRestaurantService: FoodInRestaurantService) { }

  @Input()
  restaurantId: number;
  menus: Menu[] = [];


  ngOnInit() {
    this.getMenus();
  }

  getFoods(menus: Menu[]): void {
    menus.forEach((menu, i) => {
      this.foodInRestaurantService
        .getFoods(this.restaurantId, menu.menuId)
        .subscribe(
          response => menu.foods = response
        )
    })
  }

  getMenus(): void {
    this.foodInRestaurantService
      .getMenus(this.restaurantId)
      .subscribe(
        response => {
          this.menus = response;
          this.getFoods(this.menus);
          // if(this.menus.length > 0){
          //   this.menus[0].isOpen = true;
          // }
        }
      )
  }

  toggleMenu(i) {
    this.menus[i].isOpen = !this.menus[i].isOpen;
  }

  toggleFood(i, j) {
    this.menus[i].foods[j].isOpen = !this.menus[i].foods[j].isOpen;
  }

  mock():void {}

}
