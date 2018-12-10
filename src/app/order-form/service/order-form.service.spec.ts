import { TestBed } from '@angular/core/testing';

import { OrderFormService } from './order-form.service';
import { Customer } from '../models/customer';

describe('OrderFormService', () => {

  let service: OrderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderFormService
      ]
    })

    service = TestBed.get(OrderFormService);
  }

  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return customer', () => {
    const customer: Customer = new Customer(
      'theName',
      'theSurname',
      'theAddress',
      'theZipcode',
      'theCity'
    );
    expect(service.doSomethingWithCustomerAddress(customer)).toBe(customer);
  });
});
