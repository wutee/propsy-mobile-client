import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor() {
  }

  foods = [];

  addProduct(food) {
    this.foods.push({...food, id: this.foods.length + 1});
  }

  removeProduct(id) {
    this.foods = this.foods.filter((element) => {
      return element.id !== id;
    });
  }
}
