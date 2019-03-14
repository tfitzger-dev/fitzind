import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Job} from "../models/Job";
import {Observable} from "rxjs/index";
import {User} from "../models/User";
import {TokenResponse} from "../models/TokenResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  public login(username:string, password:string): Observable<TokenResponse>{
    return this.http.post<TokenResponse>("http://localhost:8000/api/v1/auth/login/", {username: username, password:password})
  }
}
