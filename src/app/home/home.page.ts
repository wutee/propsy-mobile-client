import { Component } from '@angular/core';
import {BucketService} from "../bucket/bucket.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public BucketService: BucketService) { }

  products = [{
    foodId: 1,
    foodName: 'Klopsiki',
    foodDescription: 'Klopsiki w sosie meksykańskim',
    calories: 550,
    isSpisy: true,
    isVege: false,
    isGlutenFree: true,
    price: 40,
  },
    {
      foodId: 1,
      foodName: 'Flaki',
      foodDescription: 'Pyszne flaczki',
      calories: 240,
      isSpisy: true,
      isVege: false,
      isGlutenFree: true,
      price: 20,
    },
    {
      foodId: 1,
      foodName: 'Woda',
      foodDescription: 'Woda mineralna',
      calories: 100,
      isSpisy: true,
      isVege: false,
      isGlutenFree: true,
      price: 15,
    }];

  addProductToBucket(id) {
    this.BucketService.addProduct(this.products.find((element) => {return id === element.foodId;}));
  }

}
