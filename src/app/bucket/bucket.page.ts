import {Component} from '@angular/core';
import {BucketService} from './service/bucket.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public bucketService: BucketService,
              private router: Router,
              private authService: AuthService) {
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

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
