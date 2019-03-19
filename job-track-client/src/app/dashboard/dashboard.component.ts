import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("token") != null;
    this.userService.getCurrentUser().subscribe(
      (user) => {
        this.user = user
      }
    )
  }

}
