import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL_LOGIN } from '../app.constant';
;

export const TOKEN = 'token'
export const AUTH_USER = 'authenticatedUser'


@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string){
    
    return this.http.post<any>(`${API_URL_LOGIN}/authenticate`, {username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          return data
        }
      )
    )
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTH_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
    return null
  }

  isUserLogged(){
    let user = sessionStorage.getItem(AUTH_USER)
    if(user){
      let token = sessionStorage.getItem(TOKEN)
      if(user !== null && token !== null){
        return true
      }
    }
    return false
  }

  logout(){
    sessionStorage.removeItem(AUTH_USER)
    sessionStorage.removeItem(TOKEN)
  }
}
