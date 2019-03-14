import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  error: string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      (success) => {
        localStorage.setItem("token", success.token);
        localStorage.setItem("userid", success.userid + "");
        location.reload();
      },
      (error) =>{
        console.log(error.error.error)
        this.error = error.error.error
      }
    )
  }

}
