import {Component} from '@angular/core';
import 'hammerjs';
import {OrdersService} from './service/orders.service';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {FoodOrder} from '../../client';
import {BucketService} from '../bucket/bucket.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AlertOptions} from '../../../node_modules/@ionic/core';
import {BucketPage} from '../bucket/bucket.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {
  orders$: Observable<FoodOrder[]>;
  orders: FoodOrder[];
  showDetails: boolean;
  timeRating: number;
  presentOrder: FoodOrder;
  isSavedComment: boolean;
  isEditingComment: boolean;
  priceRating: number;
  qualityRating: number;
  comment: string;

  constructor(
    public orderService: OrdersService,
    public actionSheetCtrl: ActionSheetController,
    public bucketService: BucketService,
    private alertCtrl: AlertController,
  ) {
    this.getOrders();
    this.showDetails = false;
    this.timeRating = 0;
    this.qualityRating = 0;
    this.priceRating = 0;
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create(<AlertOptions>{
      header: 'Ups, too late :/',
      message: 'Order already in preparation',
      buttons: ['Ok']
    });
    await alert.present();
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
            if (order.status === 'NEW') {

              const body = {
                id: order.id,
                date: order.date,
                address: order.address,
                city: order.city,
                status: 'DELIVERED',
                price: order.price,
                foodItems: order.foodItems,
                restaurant: order.restaurant,
                purchaser: order.purchaser
              };

              fetch('https://propsy-backend-jwt.herokuapp.com/api/food-orders', {
                'credentials': 'include',
                'headers': {
                  'accept': 'application/json, text/plain, */*',
                  'accept-language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
                  'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0Njg4NTgyMH0.Y7A0Wn1bEYHLAzlTHHrnU4Tx-SyZY6bxaIENeXzE6hXtlp5P91DPvOhxcaCa4K8fvEaJrA_iYz2Mx-ArN51AIQ',
                  'content-type': 'application/json',
                },
                'referrerPolicy': 'no-referrer-when-downgrade',
                'body': JSON.stringify(body),
                'method': 'PUT',
                'mode': 'cors'
              }).then();
              for (const food of order.foodItems) {
                this.bucketService.addProduct(food);
              }

            } else {
              this.presentAlert();
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
    this.orders$ = this.orderService.getOrders()
      .pipe(
        tap((data) => {
          this.orders = data;
        })
      );
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
