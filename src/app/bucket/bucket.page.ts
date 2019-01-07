import {Component} from '@angular/core';
import {BucketService} from './service/bucket.service'

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  static sum = 0;

  constructor(public bucketService: BucketService) {
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

}
