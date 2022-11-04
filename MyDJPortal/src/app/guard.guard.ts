import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // check if the token exists 
      const token = localStorage.getItem('token');
      if (token) {
        const jwtHelper = new JwtHelperService();

        if (!jwtHelper.isTokenExpired(token)) {
          // token is valid
          return true;
        }
        else {
          // token is expired
          this.router.navigateByUrl('/dj/login');
          return false;
        }
      }
      else {
        // token doesn't exist in the localstorage
        this.router.navigateByUrl('/dj/login');
        return false;
      }
  }
  
}
