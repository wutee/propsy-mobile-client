import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderFormComponent} from './order-form/order-form.component';
import {AuthGuard} from './components/auth/auth.guard';
import {NotAuthGuard} from './components/auth/not-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order-form/:id', component: OrderFormComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [NotAuthGuard] },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule'},
  { path: 'closest-restaurant', loadChildren: './closest-restaurant/closest-restaurant.module#ClosestRestaurantPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'food-in-restaurant/:id', loadChildren: './food-in-restaurant/food-in-restaurant.module#FoodInRestaurantPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
