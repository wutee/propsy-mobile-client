import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Environment } from '@ionic-native/google-maps/ngx';
import { GeopositionService } from './service/geoposition.service';
import { RestaurantGeoposition } from './model/restaurant-geoposition';

@Component({
  selector: 'app-closest-restaurant',
  templateUrl: './closest-restaurant.page.html',
  styleUrls: ['./closest-restaurant.page.scss'],
})
export class ClosestRestaurantPage implements OnInit {

  map: GoogleMap;
  device_geoposition: Geoposition;
  restaurants_geoposition: RestaurantGeoposition[];
  closest_restaurant_geoposition: RestaurantGeoposition;

  async ngOnInit() {
    await this.platformService.ready()
    this.device_geoposition = await this.geopositionService.get_device_geoposition()
    this.loadMap()
    this.get_restaurants_geoposition()
    this.get_closest_restaurant()
  }

  constructor(private platformService: Platform, private geopositionService: GeopositionService, private googleMaps: GoogleMaps) { }

  loadMap(): void {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g',
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g'
    })

    this.create_map(this.device_geoposition.coords.latitude, this.device_geoposition.coords.longitude, 12, 18)
    this.add_maker("Your position", 'blue', this.device_geoposition.coords.latitude, this.device_geoposition.coords.longitude)
  }

  private create_map(latitude: number, longitude: number, zoom: number, tilt: number): void {
    this.map = this.googleMaps.create('map_canvas', {
    camera: {
      target: {
        lat: latitude,
        lng: longitude
      },
      zoom: zoom,
      tilt: tilt
      }
    });
  }

  private add_maker(title: string, icon: string, latitude: number, longitude: number): void {
    this.map.addMarker({
      title: title,
      icon: icon,
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude 
      }
    })
  }

  get_restaurants_geoposition(): void {
    this.geopositionService.get_restaurants_geoposition()
      .then(resp => {
        this.restaurants_geoposition = resp;
        resp.forEach(r => this.add_maker("\"" + r.restaurant.nameSlug + "\" " + r.restaurant.address, 'red', r.latitude, r.longitude))
      })
      .catch(err => console.log(err))
  }

  get_closest_restaurant(): void{
    this.geopositionService.get_closest_restaurant()
      .then(resp => {
        this.closest_restaurant_geoposition = resp;
        this.add_maker("\"" + resp.restaurant.nameSlug + "\" " + resp.restaurant.address, 'green', resp.latitude, resp.longitude)
      })
      .catch(err => console.log(err))
  }

}
