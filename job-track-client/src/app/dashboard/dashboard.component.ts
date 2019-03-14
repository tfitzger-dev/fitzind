import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../models/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("token") != null;
  }

}
