import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderFormComponent} from './order-form/component/order-form.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order-form', component: OrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
