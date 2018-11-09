import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {
  constructor(public modalController: ModalController) {}

  async presentOrder() {
    const modal = await this.modalController.create({
      component: OrderComponent,
      componentProps: { idOrder: 123 }
    });
    return await modal.present();
  }
}
