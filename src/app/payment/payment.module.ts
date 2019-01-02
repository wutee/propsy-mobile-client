import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '../translator/translate.module';
import {PaymentComponent} from "./payment.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
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
  declarations: [PaymentComponent]
})
export class PaymentModule {}
