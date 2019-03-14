import { Component, OnInit } from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from '../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  constructor(private tasksService:TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
      (results) => this.tasks = results
    )
  }

}
