import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpModel } from '../model/signup.model';
import { TrainingRegistrationDataService } from '../service/data/training-registration-data.service';
import { NotificationService } from '../service/notification/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Username = ""
  Email = ""
  Password = ""
  signupMessage: any;
  constructor(
    private trainingService: TrainingRegistrationDataService,
    private notificationService: NotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  submit() {
    let signupModel: SignUpModel = new SignUpModel();
    signupModel.email = this.Email;
    signupModel.username = this.Username;
    signupModel.password = this.Password;
    this.trainingService.signup(signupModel).subscribe(
      response => {
        this.signupMessage = null;
        console.log(response);
        this.router.navigate(['Login'])
        this.notificationService.showSuccess("Signup Successfully", "Success");
      },
      error => {
        if(error.error.errors){
          if(error.error.errors[0]){
            if(error.error.errors[0].errorDetails){
              this.notificationService.showError(error.error.errors[0].errorDetails, "Error");
            }
            else {
              this.notificationService.showError(error.error.errors[0], "Error");
            }  
          }
        }
      }
    )
  }
}








  
