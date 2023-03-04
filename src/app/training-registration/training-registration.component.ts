import { Component, OnInit } from '@angular/core';
import { TrainingRegistrationDataService } from '../service/data/training-registration-data.service';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification/notification.service';
import { HttpResponse } from '@angular/common/http';
import { TRModel } from '../model/TRModel.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Hospitals } from '../model/hospitals';

@Component({
  selector: 'app-training-registration',
  templateUrl: './training-registration.component.html',
  styleUrls: ['./training-registration.component.css']
})
export class TrainingRegistrationComponent implements OnInit {

  
  fname = ""
  uniy = ""
  major = ""
  gpa: any;
  phone=""
  dot = ""
  trMessage: any;
  jwtAuth: any;
  trainingService: any;
  hospitals: any;
  selectedHospital: any;

  trainingForm:FormGroup;

  //  = [
  //   {id: 4 , name: "Maternity and children's Hospital"},
  //   {id: 5 , name: "Al-Amal mental health complex"},
  //   {id: 7 , name: "General Hospital"}
  //   ];

    // form = new FormGroup({
    //   hospitals: new FormControl('', Validators.required)
    // });


  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private fb:FormBuilder,
    public service: TrainingRegistrationDataService,
    
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.hospitals= [
      {id: 6  , name: "Maternity and children's Hospital"},
      {id: 8  , name: "Al-Amal mental health complex"},
      {id: 10 , name: "General Hospital"}
      ];

  }

  createForm(){
    
    this.trainingForm = this.fb.group({
      
      hospital: []
    });
  }

  // get hospitals(){
  //   return this.form.controls;
  // }

  f(){
    return this.trainingForm.controls;
  }

  submit() {
    // console.log(this.fname)
    // console.log(this.uniy)
    // console.log(this.major)
    // console.log(this.gpa)
    // console.log(this.phone)
    // console.log(this.dot)
     console.log();


    let trModel: TRModel = new TRModel();
    trModel.fname = this.fname;
    trModel.uniy = this.uniy;
    trModel.major = this.major;
    trModel.gpa = this.gpa;
    trModel.phone = this.phone;
    trModel.dot = this.dot;
    trModel.hospital = this.f()['hospital'].value;

    
    this.service.TR(trModel).subscribe(
      response => {
        this.trMessage = null;
        console.log(response);
        this.notificationService.showSuccess('SUCCESS', 'Registration Compeleted');
        this.router.navigate(['RegistrationCompleted'])
      },
      error => {
        this.notificationService.showError('Error', 'Registration failed');
        console.log(error)
      }
    )
  }
 
}
