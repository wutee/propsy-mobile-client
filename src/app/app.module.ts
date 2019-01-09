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
import {TranslateModule} from './translator/translate.module';
import {OrderFormModule} from './order-form/order-form.module';
import {LoginPageModule} from './login/login.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AuthModule} from './components/auth/auth.module';
import {HomePageModule} from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingIconComponent} from './components/loading-icon/loading-icon.component';
import {LanguageComponent} from './components/language/language.component';

import { MapPageModule } from './map/map.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

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
    TranslateModule.forChild(),
    LoginPageModule,
    AngularFontAwesomeModule,
    HomePageModule,
    MapPageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g'
    }),
    AgmDirectionModule,
    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: PropsyHttpInterceptor, multi: true },
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
