import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  
  private publicRoutes = [
    '/api/token/'
  ];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('accessToken');
    const jwtHelper = new JwtHelperService();

    // check if the current route is a public route, which can be skipped
    if (!this.publicRoutes.includes(request.url))
    {
      // Check if the current token isnt expired
      if (!jwtHelper.isTokenExpired(token))
      {
        // Token is still valid, add it to the request
        request = request.clone({
          headers: request.headers.set(
            'Authorization', 'Bearer ' + token
          )
        });
      }
    }

    return next.handle(request);
  }
}
