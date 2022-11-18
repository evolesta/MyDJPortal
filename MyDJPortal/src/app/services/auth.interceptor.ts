import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private publicRoutes = [
    environment.apiurl + '/token'
  ];

  constructor(private router: Router,
      private snackbar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.url.includes(environment.apiurl)) {
      if (!this.publicRoutes.includes(request.url)) {
      
        const token = localStorage.getItem('token');
        if (token) {
  
          const jwtHelper = new JwtHelperService();
          if (!jwtHelper.isTokenExpired(token)) {
  
            request = request.clone({
              headers: request.headers.set(
                'Authorization', 'Bearer ' + token
              )
            });
          }
          else {
            this.router.navigateByUrl("/dj/login");
            this.snackbar.open("Sessie verlopen - meld je opnieuw aan", '', { duration: 4000 });
            return EMPTY;
          }
        }
        else {
          this.router.navigateByUrl("/dj/login");
            this.snackbar.open("Sessie verlopen - meld je opnieuw aan", '', { duration: 4000 });
            return EMPTY;
        }
      }
    }
    else if (request.url.includes(environment.iapiurl)) {
      request = request.clone({
        headers: request.headers.set('X-Api-Token', environment.itoken)
        .set('X-Requested-With', 'XMLHttpRequest')
      });
    }

    return next.handle(request);
  }
}
