import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRouteSnapshot} from "@angular/router";

const AUTH_API = 'https://youthnetalbania.onrender.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  forgetP(email: string): Observable<any> {
    return this.http.post('https://youthnetalbania.onrender.com/api/auth/forget-password', { email })
  }

  resetPassword(email: string | null, token: string | null, newPassword: string, confirmPassword: string, route: ActivatedRouteSnapshot): Observable<any> {
    // construct the request body
    const requestBody = {
      email: email,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`https://youthnetalbania.onrender.com/api/auth/forget-password`, requestBody, httpOptions);
  }

}
