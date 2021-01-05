import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/";
import { DataService } from '../data.service';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        if (req.headers.get('Auth') =="True"){
            if(localStorage.getItem('webtoken')!=null){
                const reqHeader = new HttpHeaders({
                    'Content-Type': 'application/json',
                   'Accept': 'application/json', 
                   'x-access-token':localStorage.getItem('webtoken')
                  })
                const cloneReq = req.clone({
                    headers : reqHeader
                });
                return next.handle(cloneReq)
            }
        }
        else{
                return next.handle(req)
            }
    }   
    
    
}