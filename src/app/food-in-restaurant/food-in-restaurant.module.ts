import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {PropsyHttpInterceptor} from '../propsyHttpInterceptor';
import { TranslateModule } from '../translator/translate.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true }
  ]
})
export class FoodInRestaurantPageModule {}
