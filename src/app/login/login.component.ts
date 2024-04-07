import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AfterLoginServiceService } from '../services/after-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  userNotRegistered: boolean = false;

  userRegistered: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpService, private afterLogin: AfterLoginServiceService) {

  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.loginForm = this.fb.group({
      email: ['', []],
      password: ['', []]
    })
  }

  login() {
    const endPoint = "registered-users?email=" + this.loginForm.value.email + "&&password=" + this.loginForm.value.password;
    this.http.getData(endPoint).subscribe((resp: any) => {
      console.log(resp)
      if (resp && resp.length > 0) {
        this.userNotRegistered = false;
        this.userRegistered = true;
        this.afterLogin.addUser(resp[0]);
      }
      else {
        this.userNotRegistered = true;
      }
    })
  }

}