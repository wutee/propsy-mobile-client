import { Component } from '@angular/core';
import {BucketService} from "./bucket.service";

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public BucketService: BucketService) { }

  sumProducts(){
  	let sum = 0;
  	for(let product of this.BucketService.products){
  	 sum+=product.price;
  	}
  	return sum;
  }

  countProducts(){
  	return this.BucketService.products.length;
  }

}
