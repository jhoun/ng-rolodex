import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

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

  validUsername: boolean = false;
  validPassword: boolean = false;
  validName: boolean = false;
  validEmail: boolean = false;
  validAddress: boolean = false;

  constructor(private auth: AuthService) { }

  register() {
    this.auth.register(this.registerFormData)
    .then(() => {
      console.log('User logged In');
    })
    .catch((err) => {
      console.log('err');
    })
  }


  ngOnInit() {
  }

  validateNewUserData(input) {
    const uppercasedInput = input.charAt(0).toUpperCase() + input.slice(1);
    if (!this.registerFormData[input]) {
      this[`valid${uppercasedInput}`]= false;
    }
    else if (this.registerFormData[input].length < 3) {
      this[`valid${uppercasedInput}`] = false;
    }
    else {
      this[`valid${uppercasedInput}`] = true;
    }
  }

  validateEmail() {
    if (!this.registerFormData.email) {
      this.validEmail = false;
    }
    else if (this.registerFormData.email.length < 3) {
      this.validEmail = false;
    }
    else if (!this.registerFormData.email.includes('@')){
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }
  }

   isDisabled(){
    return !this.validUsername || !this.validPassword || !this.validName || !this.validEmail || !this.validAddress ;
  }

}
