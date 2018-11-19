import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import {PropsyHttpInterceptor} from "./propsyHttpInterceptor";
import {TranslationService} from "./translator/translation.service";
import {OrderFormComponent} from "./order-form/component/order-form.component";
import {TranslatePipe} from "./translator/translate.pipe";
import {ApiModule} from "../client";
import { LanguageComponent } from './language/language.component';
import { TranslateModule } from './translator/translate.module';

@NgModule({
  declarations: [AppComponent, OrderFormComponent, LanguageComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    FoodInRestaurantService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
