import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedMethod: string;
  public buyButton: boolean = false;
  public cardNumber: number;
  public experienceDate: string;
  public cvv: string;

  private selectPaymentForm(method: string) {
    this.selectedMethod = method;
    this.buyButton = method === 'cash';
  }

  private changeInput() {
    this.buyButton = !!(this.cardNumber && this.experienceDate && this.cvv);
  }

}
