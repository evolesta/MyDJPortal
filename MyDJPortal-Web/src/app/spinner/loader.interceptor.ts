import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private spinner: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Show the loading spinner
    this.spinner.show();

    return next.handle(request).pipe(
      finalize(() => this.spinner.hide())
    );
  }
}
