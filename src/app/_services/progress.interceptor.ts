import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProgressService } from './progress.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(
    private progressService: ProgressService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Check if the request is for the applyForRfq API
    if (request.url.includes('/items/') && request.url.endsWith('/apply')) {
      this.totalRequests++;
      this.progressService.setLoading(true);

      return next.handle(request).pipe(
        finalize(() => {
          this.totalRequests--;
          if (this.totalRequests === 0) {
            this.progressService.setLoading(false);
          }
        })
      );
    }

    // For all other requests, just pass them through without modifying the loading state
    return next.handle(request);
  }
}