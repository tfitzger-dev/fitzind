import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../models/Task";
import {Observable} from "rxjs";
import {Job} from "../models/Job";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  public getTasks():Observable<Task[]>{
    let username: string = 'Don';
    let password: string = 'Don12345';

    let headers = new HttpHeaders({
      'Authorization': "Basic " + btoa(username + ":" + password),
      'Content-Type': 'application/json'
    });
    console.log(headers);
    return this.http.get<Task[]>("http://localhost:8000/api/v1/tasks/", {headers: headers})
  }
}
