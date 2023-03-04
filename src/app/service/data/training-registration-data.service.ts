import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL } from 'src/app/app.constant';
import { SignUpModel } from 'src/app/model/signup.model';
import { TRModel } from 'src/app/model/TRModel.model';
import { TrainingRegistrationComponent } from 'src/app/training-registration/training-registration.component';

@Injectable({
  providedIn: 'root'
})
export class TrainingRegistrationDataService {

  constructor(
    public http:HttpClient
  ) { }

  
  retrieveAllData(username:any)
  {
    return this.http.get<TrainingRegistrationComponent>(`http://localhost:8080/${username}/training-registration`);
    // console.log("execute Hello World Bean Service")
  }


  signup(signupModel: SignUpModel): Observable<any>{
    return this.http.post<any>(`${API_URL}/signup`, signupModel).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
        }
      )
    );

      }

      
  TR(tRModel: TRModel): Observable<any>{
    return this.http.post<any>(`${API_URL}/training`, tRModel).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
        }
      )
    );

      }

  }




