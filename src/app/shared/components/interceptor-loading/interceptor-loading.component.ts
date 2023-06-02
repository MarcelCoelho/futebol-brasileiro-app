import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoaderService } from '../../services/loader.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private LoadingService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.LoadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.LoadingService.setLoading(false);
        }
      })
    )
  }

}
