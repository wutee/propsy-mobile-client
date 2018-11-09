import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { OrdersPage } from '../orders/orders.page';
import {BucketPage} from "../bucket/bucket.page";
import {FoodInRestaurantPage} from '../food-in-restaurant/food-in-restaurant.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(orders:orders)',
        pathMatch: 'full',
      },
      {
        path: 'orders',
        outlet: 'orders',
        component: OrdersPage
      },
      {
        path: 'bucket',
        outlet: 'bucket',
        component: BucketPage
      },
      {
        path: 'food-in-restaurant',
        outlet: 'food-in-restaurant',
        component: FoodInRestaurantPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(orders:orders)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
