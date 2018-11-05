import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormData: {
    username: string;
    password: string;
    name: string;
    email: string;
    address: string;
  } = {
    username: '',
    password: '',
    name: '',
    email: '',
    address: ''
  }

  validNewUserData: boolean = false;

  constructor() { }

  login() {
    console.log('hello');
  }


  ngOnInit() {
  }

  validateNewUserData(input) {
    if (!this.registerFormData[input]) {
      this.validNewUserData = false;
    }
    else if (this.registerFormData[input].length < 3) {
      this.validNewUserData = false;
    }
    else {
      this.validNewUserData = true;
    }
  }

  // validateEmail() {
  //   if (!this.registerFormData.email) {
  //     this.validName = false;
  //   }
  //   else if (this.registerFormData.username.length < 3) {
  //     this.validName = false;
  //   }
  //   else {
  //     this.validName = true;
  //   }
  // }

   isDisabled(){
    return !this.validNewUserData;
  }

}
