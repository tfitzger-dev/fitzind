import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {JobsComponent} from "./jobs/jobs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogoutComponent} from "./auth/logout/logout.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'auth/logout', component: LogoutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
