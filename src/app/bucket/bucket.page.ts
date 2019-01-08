import {Component} from '@angular/core';
import {BucketService} from './bucket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  static sum = 0;

  constructor(
    public bucketService: BucketService,
    private router: Router
  ) {
  }

  sumProducts() {
    let sum = 0;
    for (const food of BucketService.foods) {
      sum += food.price;
    }
    BucketPage.sum = sum;
    return sum;
  }

  countProducts() {
    return BucketService.foods.length;
  }

  order() {
    this.router.navigate(['order-form']);
  }

}
