import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor() {
  }

  static foods = [];

  getFoods() {
    return BucketService.foods;
  }

  addProduct(food) {
    BucketService.foods.push({...food});
  }

  removeProduct(id) {
    BucketService.foods = BucketService.foods.filter((element, index) => {
      return index !== id;
    });
  }
}
