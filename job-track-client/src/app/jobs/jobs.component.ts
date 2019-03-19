import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Job} from "../models/Job";
import {JobsService} from "../services/jobs.service";
import {Task} from '../models/task.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @Input() jobs: Job[];
  offset: number = 0;
  constructor(private jobService:JobsService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  addWeek(offset: number){
    this.offset += (offset * 7);
  }

  totalHoursForTask(task:Task):number{
    return 0
  }

  get weekStart():Date {
    var date = new Date();
    date.setDate((date.getDate() - date.getDay()) + this.offset);
    return date;

  }

  get weekEnd():Date{
    var date = new Date(this.weekStart.valueOf())
    date.setDate(this.weekStart.getDate() + 6)
    return date;
  }

  get weekList():Date[]{
    let dates = new Array(7);
    for(var i = 0; i < 7; i++){
      let date = new Date(this.weekStart.valueOf())
      date.setDate(date.getDate() + i);
      dates[i] = date;
    }
    return dates;
  }

}
