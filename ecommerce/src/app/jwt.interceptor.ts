import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
//  const env=environment.API_URL
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const token=
   const reqest= request.clone({
    // url:this.env+request.url,
    // setHeaders:{authorization:`bearer${token}`}
   })
    return next.handle(request).pipe(tap (event=>{}));
  }
}

