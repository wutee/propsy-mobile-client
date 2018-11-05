import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderFormPage } from './order-form.page';
import { OrderFormComponent } from '../component/order-form.component';

const routes: Routes = [
  {
    path: '',
    component: OrderFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [OrderFormComponent],
  declarations: [
    OrderFormPage,
    OrderFormComponent
  ]
})
export class OrderFormPageModule {}
