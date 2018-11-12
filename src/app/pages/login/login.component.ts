import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormData: {
    username: string;
    password: string;
  } = {
    username: '',
    password: ''
  };

  validName: boolean = false;
  validPassword: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  login() {
    this.auth.login(this.loginFormData)
    .then(() => {
      return this.router.navigate(['/'])
    })
    .catch((err) => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

  validateName() {
    if (!this.loginFormData.username) {
      this.validName = false;
    }
    else if (this.loginFormData.username.length < 3) {
      this.validName = false;
    }
    else {
      this.validName = true;
    }
  }

  validatePassword(){
    if(!this.loginFormData.password){
       this.validPassword = false;
    }
    else if (this.loginFormData.password.length < 3) {
      this.validPassword = false;
    }
    else {
      this.validPassword = true;
    }
  }

  isDisabled(){
    return !this.validName || !this.validPassword
  }

}
