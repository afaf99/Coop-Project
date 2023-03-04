import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthService } from './jwt-auth.service';
//import { BasicAuthService } from './basic-auth.service';
//import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    //private hcAuth: HardcodedAuthService,
    //private basicAuth: BasicAuthService,
    private jwtAuth: JwtAuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.jwtAuth.isUserLogged()){
      return true
    }
    this.router.navigate(['login'])
    return false
  }
}
