import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { OrderService } from './service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;

  constructor(public orderService: OrderService) {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders()
      .then(data => {
        this.orders = data;
      });
  }
  pressEvent() {
    console.log('press');
  }

  tapEvent() {
    console.log('tap');
  }
}
