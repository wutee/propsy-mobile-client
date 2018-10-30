import { Component } from '@angular/core';
import {BucketService} from "./bucket.service";

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public BucketService: BucketService) { }

  summProducts(){
  	var summ = 0;
  	for(let product of this.BucketService.products){
  	 summ+=product.price;
  	}
  	return summ;
  }

  countProducts(){
  	var count = 0;
  	for(let product of this.BucketService.products){
  	 count+=1;
  	}
  	return count;
  }

}
