import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Check if JWT tokens are still valid
      const token = localStorage.getItem('accessToken');

      if (token) {
        // Check if token is still valid
        const jwtHelper = new JwtHelperService();

        if (jwtHelper.isTokenExpired(token)) {
          this.router.navigateByUrl('admin');
          return false;
        }
        else {
          return true;
        }
      }
      else {
        // Token not available in localStorage
        return false;
      }
  }
  
}
