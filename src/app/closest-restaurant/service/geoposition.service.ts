import { Injectable } from '@angular/core';
import { RestaurantResourceService, Restaurant } from '../../../client';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Geocoder, GeocoderRequest, GeocoderResult } from '@ionic-native/google-maps/ngx';
import { RestaurantGeoposition } from '../model/restaurant-geoposition'


@Injectable({
  providedIn: 'root'
})
export class GeopositionService {

  constructor(private restaurantService: RestaurantResourceService, private geolocation: Geolocation) {
   }

  public async get_device_geoposition(): Promise<Geoposition> {
    let device_geoposition: Geoposition = null;
    
    await this.geolocation.getCurrentPosition()
            .then(resp => device_geoposition = resp)
            .catch(err => console.log(err))

    return device_geoposition
  }

  public async get_restaurant_geoposition(restaurant: Restaurant): Promise<RestaurantGeoposition> {
    let restaurant_geoposition: RestaurantGeoposition = null;
    
    if(restaurant.address != null){    
      let options: GeocoderRequest = {
        address: restaurant.address
      };
    
      await Geocoder.geocode(options)
        .then((resp: GeocoderResult[]) => {
          restaurant_geoposition = new RestaurantGeoposition(restaurant, resp[0].position.lat, resp[0].position.lng)
        })
        .catch(err => console.log(err))
    }

    return restaurant_geoposition
  }

  public async get_restaurants_geoposition(): Promise<RestaurantGeoposition[]> {
    let restaurants = await this.restaurantService.getAllRestaurantsUsingGET().toPromise();
    let restaurnts_geoposition: RestaurantGeoposition[] = new Array();
    
    for (const restaurant of restaurants) {
      await this.get_restaurant_geoposition(restaurant)
        .then(resp => restaurnts_geoposition.push(resp))
        .catch(err => console.log(err))
    }
    
    return restaurnts_geoposition
  }

  private find_closest_restaurant(device_geoposition: Geoposition, restaurants_geoposition: RestaurantGeoposition[]): RestaurantGeoposition{
    let closest_restaurant_geoposition: RestaurantGeoposition = restaurants_geoposition[0];
    let closest_restaurant_distance: number = closest_restaurant_geoposition.calculate_distance(device_geoposition);

    for (var _i = 1; _i < restaurants_geoposition.length; _i++) {
      let restaurant_distance = restaurants_geoposition[_i].calculate_distance(device_geoposition);
      if(closest_restaurant_distance > restaurant_distance)
        closest_restaurant_geoposition = restaurants_geoposition[_i];
        closest_restaurant_distance = restaurant_distance;
      }
  
    return closest_restaurant_geoposition
  }

  public async get_closest_restaurant(): Promise<RestaurantGeoposition> {
    let device_geoposition = await this.geolocation.getCurrentPosition();
    let restaurnts_geoposition = await this.get_restaurants_geoposition()
    
    return this.find_closest_restaurant(device_geoposition, restaurnts_geoposition)
  }
}
