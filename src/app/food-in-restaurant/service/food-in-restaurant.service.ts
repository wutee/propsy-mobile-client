import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Food} from "../model/food";
import {Menu} from "../model/menu";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodInRestaurantService implements HttpInterceptor{

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ('GET' === request.method) {
      let duplicateRequest;
        console.log(request)
        duplicateRequest = request.clone({body: 'http://localhost:3000/api/' + request.body});
     /*   duplicateRequest=request.clone({
          params: request.params.set('apiPath',http://localhost:3000/api/)
        });*/
        return next.handle(duplicateRequest);
    }
    return next.handle(request);
  }
  // any global class ??


  apiPath: string = "http://localhost:3000/api/";

  public getMenus(restaurantId: number): Observable<Menu[]>{
    let requestPath: string = this.apiPath + "restaurants/" + restaurantId + "/menus?_fields=menuId,menuName"

    return this.http.get<Menu[]>(requestPath)
  }

  public getFoods(restaurantId: number, menuId: number): Observable<Food[]>{

    let requestPath: string = this.apiPath + "xjoin?" +
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
