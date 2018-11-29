import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OrdersPage} from './orders.page';
import { TranslateModule } from '../translator/translate.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: OrdersPage }]),
    TranslateModule.forChild()
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
