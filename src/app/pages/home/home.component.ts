import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData: {
    username: string;
    password: string;
    class: string;
  } = {
    username: '',
    password: '',
    class: ''
  };

  validName: boolean = false;
  validPassword: boolean = false;

  constructor() {}

  ngOnInit() {}

  validateName() {
    if (!this.formData.username) {
      this.validName = false;
    } 
    else if (this.formData.username.length < 3) {
      this.validName = false;
    } 
    else {
      this.validName = true;
    }
  }

  validatePassword(){
    if(!this.formData.password){
       this.validPassword = false;
    } 
    else if (this.formData.password.length < 3) {
      this.validPassword = false;
    } 
    else {
      this.validPassword = true;
    }
  }
  
  isDisabled(){
    return !this.validName || !this.validPassword
  }

  submit() {
    console.log('formData: ', this.formData);
  }
}
