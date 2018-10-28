import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor() { }

  products = [];

  addProduct(product){
    this.products.push({...product, id: this.products.length + 1});
    console.log(this.products);
  }

  removeProduct(id){
    this.products = this.products.filter((element) => {return element.id !== id;})
  }
}
