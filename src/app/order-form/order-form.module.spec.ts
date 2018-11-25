import { OrderFormModule } from './order-form.module';

describe('OrderFormModule', () => {
  let orderFormModule: OrderFormModule;

  beforeEach(() => {
    orderFormModule = new OrderFormModule();
  });

  it('should create an instance', () => {
    expect(orderFormModule).toBeTruthy();
  });
});
