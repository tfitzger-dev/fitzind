import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs/internal/Observable";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {  }

  public getCurrentUser():Observable<User>{
    let userKey = localStorage.getItem("userid");
    let headers = new HttpHeaders({
      'Authorization': "Token " + localStorage.getItem("token"),
      'Content-Type': 'application/json'
    });
    return this.http.get<User>("http://localhost:8000/api/v1/users/" + userKey, {headers: headers})
  }
}
