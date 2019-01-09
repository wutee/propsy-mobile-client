import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {OrdersPageModule} from '../orders/orders.module';
import {BucketPageModule} from '../bucket/bucket.module';
import {RestaurantPageModule} from '../restaurant/restaurant.module';
import {FoodInRestaurantPageModule} from '../food-in-restaurant/food-in-restaurant.module';
import {TranslateModule} from '../translator/translate.module';
import {HomePageModule} from '../home/home.module';
import {MapPageModule} from '../map/map.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    OrdersPageModule,
    BucketPageModule,
    FoodInRestaurantPageModule,
    OrdersPageModule,
    RestaurantPageModule,
    HomePageModule,
    MapPageModule,
    TranslateModule.forChild()
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {
}
