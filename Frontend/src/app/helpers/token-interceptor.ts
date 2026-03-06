import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  // public routes
  const publicRoutes = [
    environment.apiurl + '/token/',
    environment.apiurl + '/requests/',
    environment.apiurl + '/requestSettings/'
  ];

  // only modify http request if not a public route
  if (!publicRoutes.includes(req.url)) {

    // is a secured route which required a token
    const token = localStorage.getItem('token');

    // Add the token to the headers of the request
    req = req.clone({
        headers: req.headers.set(
          'Authorization', 'Bearer ' + token
        )
      });
  }

  // proceed with the request to the API
  return next(req);

};
