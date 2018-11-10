import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginFormData: {
    username: string;
    password: string;
  } = {
    username: '',
    password: ''
  };

  validName: boolean = false;
  validPassword: boolean = false;

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login(this.loginFormData)
    .then(() => {
      console.log('User logged In');
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
