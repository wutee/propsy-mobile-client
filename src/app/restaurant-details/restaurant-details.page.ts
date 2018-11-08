import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestaurantService} from '../restaurant/service/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  id: string;
  currentRestaurant: any;

  constructor(private route: ActivatedRoute, public restProvider: RestaurantService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRestaurantDetails();
  }

  getRestaurantDetails() {
    this.restProvider.getRestaurantDetails(this.id)
      .then(data => {
        this.currentRestaurant = data;
      });
  }

}
