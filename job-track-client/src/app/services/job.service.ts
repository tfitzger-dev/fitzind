import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/Job";
import {Observable} from "rxjs/Observable";

@Injectable()
export class JobService {

  constructor(private http:HttpClient) { }

  public getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>("http://localhost:8000/api/v1/jobs/")
  }

}
