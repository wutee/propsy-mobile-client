import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private router: Router) {}

  go() {
    this.router.navigateByUrl('/restaurant');
  }
}



/*
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantPage } from '../restaurant/restaurant.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  listRestaurants() {
    this.navCtrl.push(RestaurantPage);
  }
}*/
