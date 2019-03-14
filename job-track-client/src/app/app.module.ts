import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { TasksComponent } from './tasks/tasks.component';
import {JobsService} from "./services/jobs.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TasksService} from "./services/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    DashboardComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [JobsService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
