import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorHandler } from './service/error_handler';
import { FoodInRestaurantPage } from './food-in-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: FoodInRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodInRestaurantPage],
  providers:[
    ErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FoodInRestaurantPage,
      multi: true,
    },
  ]
})
export class FoodInRestaurantPageModule {}
