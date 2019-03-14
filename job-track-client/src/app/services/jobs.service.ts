import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Job} from "../models/Job";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private http:HttpClient) { }

  public getJobs(): Observable<Job[]>{
    let headers = new HttpHeaders({
      'Authorization': "Token " + localStorage.getItem("token"),
      'Content-Type': 'application/json'
    });
    return this.http.get<Job[]>("http://localhost:8000/api/v1/jobs/", {headers: headers})
  }
}
