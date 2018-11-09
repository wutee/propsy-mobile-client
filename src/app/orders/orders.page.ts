import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  constructor() {

  }
  pressEvent() {
    console.log('press');
  }

  tapEvent() {
    console.log('tap');
  }

  ngOnInit() {
  }
}
