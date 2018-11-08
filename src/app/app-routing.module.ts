import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantPageModule' },
  { path: 'restaurantDetails/:id', loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
