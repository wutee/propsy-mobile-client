import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Food} from "../model/food";
import {Menu} from "../model/menu";

@Injectable({
  providedIn: 'root'
})
export class FoodInRestaurantService {

  constructor(private http: HttpClient) { }

  public getMenus(restaurantId: number): Observable<Menu[]>{
    let requestPath: string = "api/restaurants/" + restaurantId + "/menus?_fields=menuId,menuName"

    return this.http.get<Menu[]>(requestPath)
  }

  public getFoods(restaurantId: number, menuId: number): Observable<Food[]>{

    let requestPath: string = "api/xjoin?" +
      "_join=r.restaurants," +
      "_j,m.menus," +
      "_j,fm.foodInMenus," +
      "_j,f.foods" +
      "&_on1=(r.restaurantId,eq,m.restaurantId)" +
      "&_on2=(m.menuId,eq,fm.menuId)" +
      "&_on3=(fm.foodId,eq,f.foodId)" +
      "&_fields=f.foodId,f.foodName,f.foodDescription,f.calories,f.isSpicy,f.isVege,f.isGlutenFree,f.photoLocation," +
      "fm.price" +
      "&_where=(r.restaurantId,eq," + restaurantId + ")~and(m.menuId,eq," + menuId + ")";

    return this.http.get<Food[]>(requestPath);
  }
}
