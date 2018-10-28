import { Component } from '@angular/core';
import {BucketService} from "../bucket/bucket.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public BucketService: BucketService, private router: Router) { }

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
      foodId: 2,
      foodName: 'Flaki',
      foodDescription: 'Pyszne flaczki',
      calories: 240,
      isSpisy: true,
      isVege: false,
      isGlutenFree: true,
      price: 20,
    },
    {
      foodId: 3,
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

  showBucket() {
    if (this.BucketService.products.length)
      this.router.navigate(['bucket']);
  }

}
