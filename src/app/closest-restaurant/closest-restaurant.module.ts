import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClosestRestaurantPage } from './closest-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ClosestRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClosestRestaurantPage]
})
export class ClosestRestaurantPageModule {}
