import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FoodInRestaurantService} from "./food-in-restaurant/service/food-in-restaurant.service";
import {OrderComponent} from "./order/order.component";
import {PropsyHttpInterceptor} from "./propsyHttpInterceptor";
import {TranslationService} from "./translator/translation.service";
import {OrderFormComponent} from "./order-form/component/order-form.component";
import {TranslatePipe} from "./translator/translate.pipe";

@NgModule({
  declarations: [AppComponent, OrderComponent, OrderFormComponent, TranslatePipe],
  entryComponents: [OrderComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    FoodInRestaurantService,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
