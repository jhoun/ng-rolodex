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

  constructor() {}

  ngOnInit() {}

  validateName() {
    console.log('validateName');
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

  submit() {
    console.log('formData: ', this.formData);
  }
}
