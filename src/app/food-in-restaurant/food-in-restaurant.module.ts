import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodInRestaurantPage } from './food-in-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: FoodInRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodInRestaurantPage]
})
export class FoodInRestaurantPageModule {}
