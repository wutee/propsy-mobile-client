import {Component, OnInit} from '@angular/core';
import {OrderFormService} from "../order-form/order-form.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cvv: string;
  buyButton = false;
  cardNumber: number;
  selectedMethod: string;
  experienceDate: string;

  constructor(
    public orderFormService: OrderFormService,
  ) {};

  ngOnInit() {
  }

  private order() {
    this.orderFormService.makeOrder();
  }

  private selectPaymentForm(method: string) {
    this.selectedMethod = method;
    this.buyButton = method === 'cash';
  }

  private changeInput() {
    this.buyButton = !!(this.cardNumber && this.experienceDate && this.cvv);
  }

}
