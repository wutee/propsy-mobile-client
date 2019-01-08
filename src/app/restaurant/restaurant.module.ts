import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantPage } from './restaurant.page';
import {FoodInRestaurantPage} from '../food-in-restaurant/food-in-restaurant.page';
import { TranslateModule } from '../translator/translate.module';
import {LoadingIconComponent} from '../components/loading-icon/loading-icon.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [RestaurantPage, FoodInRestaurantPage, LoadingIconComponent]
})
export class RestaurantPageModule {}
