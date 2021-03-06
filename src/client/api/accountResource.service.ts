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

import { KeyAndPasswordVM } from '../model/keyAndPasswordVM';
import { ManagedUserVM } from '../model/managedUserVM';
import { PasswordChangeDTO } from '../model/passwordChangeDTO';
import { PersistentToken } from '../model/persistentToken';
import { UserDTO } from '../model/userDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AccountResourceService {

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
     * activateAccount
     * 
     * @param key key
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public activateAccountUsingGET(key: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public activateAccountUsingGET(key: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public activateAccountUsingGET(key: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public activateAccountUsingGET(key: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling activateAccountUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (key !== undefined) {
            queryParameters = queryParameters.set('key', <any>key);
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

        return this.httpClient.get<any>(`api/activate`,
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
     * changePassword
     * 
     * @param passwordChangeDto passwordChangeDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePasswordUsingPOST(passwordChangeDto: PasswordChangeDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changePasswordUsingPOST(passwordChangeDto: PasswordChangeDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changePasswordUsingPOST(passwordChangeDto: PasswordChangeDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changePasswordUsingPOST(passwordChangeDto: PasswordChangeDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (passwordChangeDto === null || passwordChangeDto === undefined) {
            throw new Error('Required parameter passwordChangeDto was null or undefined when calling changePasswordUsingPOST.');
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

        return this.httpClient.post<any>(`api/account/change-password`,
            passwordChangeDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * finishPasswordReset
     * 
     * @param keyAndPassword keyAndPassword
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (keyAndPassword === null || keyAndPassword === undefined) {
            throw new Error('Required parameter keyAndPassword was null or undefined when calling finishPasswordResetUsingPOST.');
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

        return this.httpClient.post<any>(`api/account/reset-password/finish`,
            keyAndPassword,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAccount
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAccountUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public getAccountUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public getAccountUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public getAccountUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<UserDTO>(`api/account`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCurrentSessions
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentSessionsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<PersistentToken>>;
    public getCurrentSessionsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PersistentToken>>>;
    public getCurrentSessionsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PersistentToken>>>;
    public getCurrentSessionsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<PersistentToken>>(`api/account/sessions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * invalidateSession
     * 
     * @param series series
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public invalidateSessionUsingDELETE(series: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public invalidateSessionUsingDELETE(series: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public invalidateSessionUsingDELETE(series: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public invalidateSessionUsingDELETE(series: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (series === null || series === undefined) {
            throw new Error('Required parameter series was null or undefined when calling invalidateSessionUsingDELETE.');
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

        return this.httpClient.delete<any>(`api/account/sessions/${encodeURIComponent(String(series))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * isAuthenticated
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public isAuthenticatedUsingGET(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public isAuthenticatedUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public isAuthenticatedUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public isAuthenticatedUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<string>(`api/authenticate`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * registerAccount
     * 
     * @param managedUserVM managedUserVM
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public registerAccountUsingPOST(managedUserVM: ManagedUserVM, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public registerAccountUsingPOST(managedUserVM: ManagedUserVM, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public registerAccountUsingPOST(managedUserVM: ManagedUserVM, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public registerAccountUsingPOST(managedUserVM: ManagedUserVM, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (managedUserVM === null || managedUserVM === undefined) {
            throw new Error('Required parameter managedUserVM was null or undefined when calling registerAccountUsingPOST.');
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

        return this.httpClient.post<any>(`api/register`,
            managedUserVM,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * requestPasswordReset
     * 
     * @param mail mail
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public requestPasswordResetUsingPOST(mail: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public requestPasswordResetUsingPOST(mail: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public requestPasswordResetUsingPOST(mail: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public requestPasswordResetUsingPOST(mail: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (mail === null || mail === undefined) {
            throw new Error('Required parameter mail was null or undefined when calling requestPasswordResetUsingPOST.');
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

        return this.httpClient.post<any>(`api/account/reset-password/init`,
            mail,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveAccount
     * 
     * @param userDTO userDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveAccountUsingPOST(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public saveAccountUsingPOST(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public saveAccountUsingPOST(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public saveAccountUsingPOST(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling saveAccountUsingPOST.');
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

        return this.httpClient.post<any>(`api/account`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
