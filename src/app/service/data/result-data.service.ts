import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {

  constructor(
    public http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/`);
    // console.log("execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name: any) {
    
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    
    // let header = new HttpHeaders({
    //   authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/Hello-world/path-variable/${name}`,
    // {headers : header});
    // console.log("execute Hello World Bean Service")
);  }

  // createBasicAuthenticationHttpHeader() {

  //   let username = 'user'
  //   let Password = 'password'
  //   let basicAuthHeaderString ='Basic' + window.btoa(username + ':' + Password);
  //   return basicAuthHeaderString;

  // }
}


  // // Access to XMLHttpRequest at 'http://localhost:8080/Hello-world/path-variable/' from origin 
  // 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  // header is present on the requested resource.