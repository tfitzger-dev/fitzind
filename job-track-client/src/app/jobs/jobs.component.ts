import { Component, OnInit } from '@angular/core';
import {JobService} from "../services/job.service";
import {Job} from "../models/Job";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];
  constructor(private jobService:JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      (jobs) => this.jobs = jobs
    )
  }

}
