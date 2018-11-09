import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodInRestaurantPage } from './food-in-restaurant.page';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {PropsyHttpInterceptor} from '../propsyHttpInterceptor';

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
  declarations: [FoodInRestaurantPage],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true }
  ]
})
export class FoodInRestaurantPageModule {}
