import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantPage } from './restaurant.page';
import {FoodInRestaurantPage} from "../food-in-restaurant/food-in-restaurant.page";

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
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantPage, FoodInRestaurantPage]
})
export class RestaurantPageModule {}
