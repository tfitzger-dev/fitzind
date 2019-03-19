import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../models/task.model";
import {Observable} from "rxjs";
import {Job} from "../models/Job";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  public getTasks():Observable<Task[]>{
    let headers = new HttpHeaders({
      'Authorization': "Token " + localStorage.getItem("token"),
      'Content-Type': 'application/json'
    });
    return this.http.get<Task[]>("http://localhost:8000/api/v1/tasks/", {headers: headers})
  }
}
