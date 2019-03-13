import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Job} from "../models/Job";
import {Observable} from "rxjs/Observable";

@Injectable()
export class JobService {

  constructor(private http:HttpClient) { }

  public getJobs(): Observable<Job[]>{
    let username: string = 'Don';
    let password: string = 'Don12345';

    let headers = new HttpHeaders({
      'Authorization': "Basic " + btoa(username + ":" + password),
      'Content-Type': 'application/json'
    });
    console.log(headers);
    return this.http.get<Job[]>("http://localhost:8000/api/v1/jobs/", {headers: headers})
  }

}
