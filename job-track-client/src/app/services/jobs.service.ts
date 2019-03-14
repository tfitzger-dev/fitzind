import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Job} from "../models/Job";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private http:HttpClient) { }

  public getJobs(): Observable<Job[]>{
    let username: string = 'Jon';
    let password: string = 'Jon12345';

    let headers = new HttpHeaders({
      'Authorization': "Basic " + btoa(username + ":" + password),
      'Content-Type': 'application/json'
    });
    console.log(headers);
    return this.http.get<Job[]>("http://localhost:8000/api/v1/jobs/", {headers: headers})
  }
}
