import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PropsyHttpInterceptor} from './propsyHttpInterceptor';
import {TranslationService} from './translator/translation.service';
import {ApiModule} from '../client';
import { TranslateModule } from './translator/translate.module';
import { OrderFormModule } from './order-form/order-form.module';
import {LoginPageModule} from './login/login.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { GeopositionService } from './closest-restaurant/service/geoposition.service'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { GoogleMaps } from '@ionic-native/google-maps/ngx'
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
    AuthModule,
    OrderFormModule,
    TranslateModule.forRoot(),
    LoginPageModule,
    AngularFontAwesomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    GeopositionService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
