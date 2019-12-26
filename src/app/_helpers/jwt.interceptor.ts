import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        //let currentUser = localStorage.setItem('currentUser', JSON.stringify({ accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImlhdCI6MTU3NjU2MzEzNiwiZXhwIjoxNTc3MTY3OTM2fQ.Fd9zhpzAbrGpvF38v2l2kwC-xtQ_Dgk-HkwoQDWFj0lBH6OKwgkUqalVdWN-_hATuKVTsoH-YGhtN292t9IbeA', tokenType: 'Bearer' }));
        if (currentUser) {
            request = request.clone({
                setHeaders: { 
                    AuthToken: `${currentUser.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}