import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import {JobService} from "./services/job.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
