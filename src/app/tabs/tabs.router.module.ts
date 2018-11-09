import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import {BucketPage} from "../bucket/bucket.page";
import {FoodInRestaurantPage} from '../food-in-restaurant/food-in-restaurant.page';
import {OrdersPage} from '../orders/orders.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'orders',
        outlet: 'orders',
        component: OrdersPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
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
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
