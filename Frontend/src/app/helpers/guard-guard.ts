import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

export const guardGuard: CanActivateFn = (route, state) => {
  
  const token = localStorage.getItem('token');
  const jwtHelper = new JwtHelperService();
  const router = new Router();

  try {
    // if token is available in localStorage
    if (token) {
      
      // check if token is expired
      if (!jwtHelper.isTokenExpired(token)) {
        // token valid
        return true;
      }
      else {
        // token expired - redirect user
        router.navigateByUrl('/admin/login');
        return false;
      }
    }
    else {
      // no token in localstorage
      router.navigateByUrl('/admin/login');
      return false;
    }
  } 
  catch (err) {  
    // in case of error, log to console when debugging and return false
    if (environment.debug)
      console.log(err)

    localStorage.removeItem('token');
    return false;
  }
};
