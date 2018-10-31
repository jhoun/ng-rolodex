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

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log('formData: ', this.formData);
  }
}
