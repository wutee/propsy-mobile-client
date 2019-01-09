import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantResourceService} from '../../client';
import {Platform} from '@ionic/angular';
import {filter} from 'rxjs/operators';
import {resolve} from 'path';
import {reject} from 'q';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  constructor(private platform: Platform, private restaurantService: RestaurantResourceService) {
  }

  visible_device: Coordinates = null;
  visible_restaurants: Restaurant[] = [];

  origin: any = null;
  destination: any = null;
  visible_route: boolean = false;

  async ngOnInit() {
    await this.platform.ready()
    this.visible_device = await this.get_device_position()
  }

  get_device_position(): Promise<Coordinates> {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position.coords),
          error => reject(error)
        )
      })
    }
    else
      alert("You browser not suport Geolocation.")
    return null
  }

  filter_restaurants(restaurants: Restaurant[]) {
    return restaurants.filter(r => r.latitude != null && r.longitude != null)
  }

  get_all_restaurants(): Promise<Restaurant[]> {
    return new Promise<Restaurant[]>((resolve, reject) => {
      this.restaurantService.getAllRestaurantsUsingGET().toPromise()
        .then(restaurants => {
          let filter_restaurants = this.filter_restaurants(restaurants)
          resolve(filter_restaurants)
        })
        .catch(error => reject(error))
    })
  }

  async set_all_restaurants() {
    await this.get_all_restaurants()
      .then(restaurants => {
        this.visible_restaurants = restaurants;
        this.set_direction()
      })
      .catch(error => console.log(error))

    this.visible_route = false;
  }

  calculate_restaurant_distance(restaurant: Restaurant) {
    return Math.sqrt(Math.pow(this.visible_device.latitude - restaurant.latitude, 2) + Math.pow(this.visible_device.longitude - restaurant.longitude, 2))
  }

  reduce_restaurants_to_closest(restaurants: Restaurant[]): Restaurant {
    if (restaurants.length > 0) {
      let min_distance: number = this.calculate_restaurant_distance(restaurants[0]);

      return restaurants.reduce((prev_restaurant, curr_restaurant) => {
        let curr_distance: number = this.calculate_restaurant_distance(curr_restaurant);
        if (curr_distance < min_distance) {
          min_distance = curr_distance;
          return curr_restaurant
        }
        else
          return prev_restaurant;
      })
    }
    else
      return null
  }

  async get_closest_restaurant(): Promise<Restaurant> {
    let restaurants = await this.get_all_restaurants()
    let closest_restaurant = this.reduce_restaurants_to_closest(restaurants)

    return new Promise<Restaurant>((resolve, reject) => {
      if (closest_restaurant != null)
        resolve(closest_restaurant)
      else
        reject("No restaurants to calculate the closest.")
    })
  }

  async set_closest_restaurant() {
    await this.get_closest_restaurant()
      .then(closest_restaurant => {
        this.visible_restaurants = [closest_restaurant];
        this.set_direction();
      })
      .catch(error => console.log(error))

    this.visible_route = false;
  }

  set_direction(): any {
    if (this.visible_restaurants.length == 1) {
      this.origin = {lat: this.visible_device.latitude, lng: this.visible_device.longitude};
      this.destination = {lat: this.visible_restaurants[0].latitude, lng: this.visible_restaurants[0].longitude}
    }
  }

  hide_route() {
    this.visible_route = false
  }

  toggle_route() {
    this.visible_route = !this.visible_route;
  }
}
