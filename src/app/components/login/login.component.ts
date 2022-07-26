import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User [] | any;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  login() {
    const user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    console.log(user)
    this.userService.login(user).subscribe((data) => {
      alert("Thành công")
      localStorage.setItem('ID',data.id);
      this.router.navigate(['list-user'])
    })
  }
}
