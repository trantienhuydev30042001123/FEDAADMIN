import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment.pord";
import {SignUp} from "../model/SignUp";
import {Observable} from "rxjs";
import {SignIn} from "../model/SignIn";
import {JwtResponse} from "../model/jwtResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + '/signup';
  private API_SIGNIN = environment.API_LOCAL + '/signin';
  private loggedIn: boolean = true;
  constructor(private http: HttpClient) {
}
  signUp(signUp : SignUp): Observable<any>{
    return  this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignIn): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN,signIn);
  }
  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
