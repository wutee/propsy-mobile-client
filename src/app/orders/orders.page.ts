import {Component} from '@angular/core';
import 'hammerjs';
import {OrdersService} from './service/orders.service';
import {ActionSheetController} from '@ionic/angular';
import {FoodOrder} from '../../client';
import { BucketService } from '../bucket/service/bucket.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders: FoodOrder[];
  showDetails: boolean;
  timeRating: number;
  presentOrder: FoodOrder;
  isSavedComment: boolean;
  isEditingComment: boolean;
  priceRating: number;
  qualityRating: number;
  comment: string;

  constructor(public orderService: OrdersService, public actionSheetCtrl: ActionSheetController, public bucketService: BucketService) {
    this.getOrders();
    this.showDetails = false;
    this.timeRating = 0;
    this.qualityRating = 0;
    this.priceRating = 0;
  }

  async presentActionSheet(order: any) {
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
          text: 'Edit ',
          handler: () => {
            if (order.status >= 2) {
              for (const food of order.foodItems) {
                this.bucketService.addProduct(food);
              }

            }
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
      .then((data: FoodOrder[]) => {
        this.orders = data;
      });
  }

  saveOrder() {
    this.orderService.saveOrder(this.presentOrder).then(() => this.getOrders());
  }

  pressEvent() {
    console.log('press');
  }

  returnToOrderList() {
    this.showDetails = false;
    this.isEditingComment = false;
  }

  tapEvent(id: number) {
    this.showDetails = true;
    this.presentOrder = this.orders.find((element) => element.id == id);
  }

  addComment() {
    this.isEditingComment = true;
  }

  onTimeRatingChangeClick(rating: number) {
    this.timeRating = rating;
  }

  onPriceRatingClick(rating: number) {
    this.priceRating = rating;
  }

  onQualityRatingClick(rating: number) {
    this.qualityRating = rating;
  }

  closeCommentPanel() {
    this.isEditingComment = false;
  }

  saveComment() {
    this.isSavedComment = true;
    this.isEditingComment = false;
    this.presentOrder.userComment = '{ssss}';
    this.saveOrder();
  }

}
