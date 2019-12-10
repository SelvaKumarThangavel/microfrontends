import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddbudgetService } from '../add/addbudget.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private add: AddbudgetService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
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