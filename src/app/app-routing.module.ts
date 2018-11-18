import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderFormComponent} from './order-form/component/order-form.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
