import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, EmptyError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  private publicRoutes = [
    environment.apiurl + "/token"
  ];

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // check for a request to our own back-end
    if (request.url.startsWith(environment.apiurl)) {

      // check if the current URL is not a public route
      if (!this.publicRoutes.includes(request.url)) {
        
        // not a public route
        const token = localStorage.getItem('token');
        if (token) {
          
          // check if token is still valid
          const jwtHelper = new JwtHelperService();
          if (!jwtHelper.isTokenExpired(token)) {
            
            // token is still valid - add a new header to the request
            request = request.clone({
              headers: request.headers.set(
                'Authorization', 'Bearer ' + token
              )
            });
          }
          else {
            // token is expired - redirect user to login
            this.router.navigateByUrl('/dj/login');
            return EMPTY;
          }
        }
        else {
          // token doesn't exist in localstorage
          this.router.navigateByUrl('/dj/login');
          return EMPTY;
        }
      }
    }

    // if its a request to Ininja
    if (request.url.startsWith(environment.ininjaApiUrl)) {
      const headers = new HttpHeaders({
        'X-Api-Token': environment.ininjaToken,
        'X-Requested-With': 'XMLHttpRequest'
      });
      request = request.clone({headers});
    }

    return next.handle(request);
  }
}
