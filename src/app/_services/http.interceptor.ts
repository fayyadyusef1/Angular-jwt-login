import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { TokenService } from 'src/app/_services/token.service';
import { sha256 } from 'js-sha256';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private translate: TranslateService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.tokenService.getToken();
    const userInfo = this.tokenService.userInfo();
    const userAgent: string = navigator.userAgent;
    const currentLanguage: string = this.translate.currentLang;

    if (request.body instanceof FormData) {
      const formDataHeaders = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      return next.handle(request.clone({ headers: formDataHeaders }));
    }

    const modifiedBody = {
      userId: userInfo.userId,
      userAgent: userAgent,
      lang: currentLanguage,
      ...request.body,
    };
    // Hash the modified body with SHA256
    const hashedBody = sha256(JSON.stringify(modifiedBody));

    // Add the hash and userId to the modified body
    const bodyWithHash = {
      hash: hashedBody,
      ...modifiedBody,
    };

    // Set the headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Clone the request and set the modified body and headers
    const clonedRequest = request.clone({
      body: bodyWithHash,
      headers,
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }
}
