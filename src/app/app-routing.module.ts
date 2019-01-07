import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderFormComponent} from './order-form/component/order-form.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order-form/:id', component: OrderFormComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule'},
  { path: 'closest-restaurant', loadChildren: './closest-restaurant/closest-restaurant.module#ClosestRestaurantPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
