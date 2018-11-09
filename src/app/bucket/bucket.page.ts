import {Component} from '@angular/core';
import {BucketService} from './service/bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public BucketService: BucketService) {
  }

  sumProducts() {
    let sum = 0;
    for (let food of this.BucketService.foods) {
      sum += food.fm_price;
    }
    return sum;
  }

  countProducts() {
    return this.BucketService.foods.length;
  }

}
