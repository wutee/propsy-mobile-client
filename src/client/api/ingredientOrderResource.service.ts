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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { IngredientOrder } from '../model/ingredientOrder';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IngredientOrderResourceService {

    protected basePath = 'https://propsy-backend-v0.herokuapp.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createIngredientOrder
     * 
     * @param ingredientOrder ingredientOrder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createIngredientOrderUsingPOST(ingredientOrder: IngredientOrder, observe?: 'body', reportProgress?: boolean): Observable<IngredientOrder>;
    public createIngredientOrderUsingPOST(ingredientOrder: IngredientOrder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IngredientOrder>>;
    public createIngredientOrderUsingPOST(ingredientOrder: IngredientOrder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IngredientOrder>>;
    public createIngredientOrderUsingPOST(ingredientOrder: IngredientOrder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (ingredientOrder === null || ingredientOrder === undefined) {
            throw new Error('Required parameter ingredientOrder was null or undefined when calling createIngredientOrderUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<IngredientOrder>(`api/ingredient-orders`,
            ingredientOrder,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteIngredientOrder
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteIngredientOrderUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteIngredientOrderUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteIngredientOrderUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteIngredientOrderUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteIngredientOrderUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`api/ingredient-orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllIngredientOrders
     * 
     * @param eagerload eagerload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllIngredientOrdersUsingGET(eagerload?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<IngredientOrder>>;
    public getAllIngredientOrdersUsingGET(eagerload?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<IngredientOrder>>>;
    public getAllIngredientOrdersUsingGET(eagerload?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<IngredientOrder>>>;
    public getAllIngredientOrdersUsingGET(eagerload?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eagerload !== undefined) {
            queryParameters = queryParameters.set('eagerload', <any>eagerload);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<IngredientOrder>>(`api/ingredient-orders`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getIngredientOrder
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIngredientOrderUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<IngredientOrder>;
    public getIngredientOrderUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IngredientOrder>>;
    public getIngredientOrderUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IngredientOrder>>;
    public getIngredientOrderUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getIngredientOrderUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<IngredientOrder>(`api/ingredient-orders/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateIngredientOrder
     * 
     * @param ingredientOrder ingredientOrder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateIngredientOrderUsingPUT(ingredientOrder: IngredientOrder, observe?: 'body', reportProgress?: boolean): Observable<IngredientOrder>;
    public updateIngredientOrderUsingPUT(ingredientOrder: IngredientOrder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IngredientOrder>>;
    public updateIngredientOrderUsingPUT(ingredientOrder: IngredientOrder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IngredientOrder>>;
    public updateIngredientOrderUsingPUT(ingredientOrder: IngredientOrder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (ingredientOrder === null || ingredientOrder === undefined) {
            throw new Error('Required parameter ingredientOrder was null or undefined when calling updateIngredientOrderUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<IngredientOrder>(`api/ingredient-orders`,
            ingredientOrder,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
