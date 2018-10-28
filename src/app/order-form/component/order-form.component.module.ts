import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderFormComponent } from './order-form.component';

const routes: Routes = [
  {
    path: '',
    component: OrderFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderFormComponent
  ],
  declarations: [OrderFormComponent]
})
export class OrderFormComponentModule {}
