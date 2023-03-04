import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../service/jwt-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public jwtAuth: JwtAuthService) { }

  ngOnInit(): void {
    this.jwtAuth.logout();
  }

}
