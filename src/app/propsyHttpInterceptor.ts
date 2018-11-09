import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable()
export class PropsyHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const updatedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Some-dummyCode'),
      url: `${environment.API_URL}${req.url}`
    });

    console.log('Before making api call : ', updatedRequest);
    return next.handle(updatedRequest)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              console.log('api call success :', event);
            }
          },
          error => {
            if (event instanceof HttpResponse) {
              console.error('Intercepting error event', error, event);
            }
          }
        )
      );
  }
}
