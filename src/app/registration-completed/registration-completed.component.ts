import { Component, OnInit } from '@angular/core';
import { ResultDataService } from '../service/data/result-data.service';

@Component({
  selector: 'app-registration-completed',
  templateUrl: './registration-completed.component.html',
  styleUrls: ['./registration-completed.component.css']
})
export class RegistrationCompletedComponent implements OnInit {

  message = "Result"
  ResultMessageFromService: string | undefined
  name = ""

  constructor(

    public service: ResultDataService) { }

  ngOnInit(): void {
  }

  getYourReselt() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResultResponse(response),
      error => this.handelErrorResponse(error)
    );

    // console.log("your Reselt")
  }

  getYourReseltWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResultResponse(response),
      error => this.handelErrorResponse(error)
    );
  }

  handleSuccessResultResponse(response: any) {
    this.ResultMessageFromService = response.message
    // console.log(response.message)

  }

  handelErrorResponse(error: any) {
    // console.log(error);
    this.ResultMessageFromService = error
  }
}
