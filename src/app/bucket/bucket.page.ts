import { Component } from '@angular/core';
import {BucketService} from "./bucket.service";

@Component({
  selector: 'app-bucket',
  templateUrl: 'bucket.page.html',
  styleUrls: ['bucket.page.scss']
})
export class BucketPage {

  constructor(public BucketService: BucketService) { }

}
