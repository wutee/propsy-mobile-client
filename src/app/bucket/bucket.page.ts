import {Component} from '@angular/core';
import {BucketService} from './service/bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public bucketService: BucketService) {
  }

  sumProducts() {
    let sum = 0;
    for (const food of this.bucketService.foods) {
      sum += food.price;
    }
    return sum;
  }

  countProducts() {
    return this.bucketService.foods.length;
  }

}
