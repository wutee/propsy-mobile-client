import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order-form', loadChildren: './order-form/page/order-form.module#OrderFormPageModule' },
  { path: 'order-form-component', loadChildren: './order-form/component/order-form.component.module#OrderFormComponentModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
