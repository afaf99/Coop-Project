import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthService } from '../jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJwtAuthService implements HttpInterceptor{

  constructor(
    private jwtAuth: JwtAuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = this.jwtAuth.getAuthenticatedUser()
    let token = this.jwtAuth.getAuthenticatedToken()
    if(username && token){
      req = req.clone({
        setHeaders : {
          Authorization : token
        }
      })
    }
    return next.handle(req)
  }
}
