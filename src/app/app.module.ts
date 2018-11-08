import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './order-form/component/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodInRestaurantService } from './food-in-restaurant/service/food-in-restaurant.service';

import { TranslatePipe } from './translator/translate.pipe';
import {TranslationService} from './translator/translaton.service';

@NgModule({
  declarations: [AppComponent, OrderFormComponent, TranslatePipe],
  entryComponents: [],
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
    FoodInRestaurantService,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
