/**
 * propsyBackendv01 API
 * propsyBackendv01 API documentation
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs/Observable';

import {Restaurant} from '../model/restaurant';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class RestaurantResourceService {

    protected basePath = 'https://propsy-backend-v0.herokuapp.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }


  /**
   * createRestaurant
   *
   * @param restaurant restaurant
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createRestaurantUsingPOST(restaurant: Restaurant, observe?: 'body', reportProgress?: boolean): Observable<Restaurant>;
  public createRestaurantUsingPOST(restaurant: Restaurant, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Restaurant>>;
  public createRestaurantUsingPOST(restaurant: Restaurant, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Restaurant>>;
  public createRestaurantUsingPOST(restaurant: Restaurant, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (restaurant === null || restaurant === undefined) {
      throw new Error('Required parameter restaurant was null or undefined when calling createRestaurantUsingPOST.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      '*/*'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Restaurant>(`api/restaurants`,
      restaurant,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * deleteRestaurant
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteRestaurantUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public deleteRestaurantUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public deleteRestaurantUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public deleteRestaurantUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteRestaurantUsingDELETE.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      '*/*'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<any>(`api/restaurants/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * getAllRestaurants
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllRestaurantsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Restaurant>>;
  public getAllRestaurantsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Restaurant>>>;
  public getAllRestaurantsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Restaurant>>>;
  public getAllRestaurantsUsingGET(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      '*/*'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Array<Restaurant>>(`api/restaurants`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * getRestaurant
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getRestaurantUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Restaurant>;
  public getRestaurantUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Restaurant>>;
  public getRestaurantUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Restaurant>>;
  public getRestaurantUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getRestaurantUsingGET.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      '*/*'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Restaurant>(`api/restaurants/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * updateRestaurant
   *
   * @param restaurant restaurant
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateRestaurantUsingPUT(restaurant: Restaurant, observe?: 'body', reportProgress?: boolean): Observable<Restaurant>;
  public updateRestaurantUsingPUT(restaurant: Restaurant, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Restaurant>>;
  public updateRestaurantUsingPUT(restaurant: Restaurant, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Restaurant>>;
  public updateRestaurantUsingPUT(restaurant: Restaurant, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (restaurant === null || restaurant === undefined) {
      throw new Error('Required parameter restaurant was null or undefined when calling updateRestaurantUsingPUT.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      '*/*'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<Restaurant>(`api/restaurants`,
      restaurant,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
