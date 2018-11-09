import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  constructor() { }

  doSomethingWithCustomerAddress(customer: Customer) {
    // TODO
  }
}
