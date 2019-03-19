import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input()tasks: Task[];
  offset: number = 0;
  constructor(private tasksService:TasksService) { }

  ngOnInit() {

  }

  addWeek(offset: number){
    this.offset += (offset * 7);
  }

  get weekStart():Date {
    var date = new Date();
    date.setDate((date.getDate() - date.getDay()) + this.offset);
    date.setHours(0, 0, 0, 0)
    return date;

  }

  get weekEnd():Date{
    var date = new Date(this.weekStart.valueOf())
    date.setDate(this.weekStart.getDate() + 6)
    date.setHours(0, 0, 0, 0)
    return date;
  }

  get weekList():Date[]{
    let dates = new Array(7);
    for(var i = 0; i < 7; i++){
      let date = new Date(this.weekStart.valueOf())
      date.setDate(date.getDate() + i);
      date.setHours(0, 0, 0, 0)
      dates[i] = date;
    }
    return dates;
  }

}
