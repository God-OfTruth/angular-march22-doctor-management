import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService){
        
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const authToken = this.auth.getAuthToken();
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if(authToken){
        const authReq = req.clone({
            headers: req.headers
                        .set('Authorization', `Bearer ${authToken}`)
        });
        return next.handle(authReq);
    }
    
    return next.handle(req);
  }
}