import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { OrdersService } from './service/orders.service';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: any;

  constructor(public orderService: OrdersService, public actionSheetCtrl: ActionSheetController) {
    this.getOrders();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Rate',
          handler: () => {
            console.log('Rate');
          }
        },
        {
          text: 'Complaint',
          handler: () => {
            console.log('Complaint');
          }
        },
        {
          text: 'Verify ',
          handler: () => {
            console.log('Verify');
          }
        },
        {
          text: 'Repeat ',
          handler: () => {
            console.log('Repeat');
          }
        },
      ]
    });

    await actionSheet.present();
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
