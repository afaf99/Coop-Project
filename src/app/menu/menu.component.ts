import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../service/jwt-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean = false;

  constructor(public jwtAuth: JwtAuthService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
