import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from '../service/jwt-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMessage = "Incorrect username or password"
  invalidLogin = false


  constructor(private router: Router,
    private jwtAuth: JwtAuthService) { }


  ngOnInit(): void {
  }

  loginHandler() {
    this.jwtAuth.authenticate(this.username, this.password).subscribe(
      response => {
        this.invalidLogin = false
        console.log(response)
        this.router.navigate(['Home'])

      },
      error => {
        this.invalidLogin = true
        console.log(error)
      }
    )
  }
}
