import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {JobsComponent} from "./jobs/jobs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TasksComponent} from "./tasks/tasks.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
