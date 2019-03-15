import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { TasksComponent } from './tasks/tasks.component';
import {JobsService} from "./services/jobs.service";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TasksService} from "./services/tasks.service";
import {AuthService} from "./services/auth.service";
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    DashboardComponent,
    TasksComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    AppRoutingModule,
  ],
  providers: [JobsService, TasksService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
