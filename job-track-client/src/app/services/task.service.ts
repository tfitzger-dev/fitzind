import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/Task";

@Injectable()
export class TaskService {

  constructor(private http:HttpClient) { }

  public getTasks():Observable<Task[]>{
    return null;
  }

}
