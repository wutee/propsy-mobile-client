import {TestBed} from '@angular/core/testing';

import {OrderFormService} from './order-form.service';
import {Customer} from '../models/customer';

xdescribe('OrderFormService', () => {

  let service: OrderFormService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          OrderFormService
        ]
      });

      service = TestBed.get(OrderFormService);
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return customer', () => {
    const customer: Customer = {
      name: 'a',
      surname: 'a',
      city: 'a',
      address: 'a',
      zipCode: 'a'
    };
    expect(service.doSomethingWithCustomerAddress(customer)).toBe(customer);
  });
});
