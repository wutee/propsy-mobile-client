import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderFormPage } from './order-form.page';
import { OrderFormComponentModule } from '../component/order-form.component.module';

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
    OrderFormComponentModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [OrderFormPage]
})
export class OrderFormPageModule {}
