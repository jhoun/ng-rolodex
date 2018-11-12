import { Component, OnInit } from '@angular/core';
import { BackendService} from '../../services/backend.service';

@Component({
  selector: 'create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  newContactFormData: {
    fullName: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string
  } = {
    fullName: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: ''
  }

  validFullName: boolean = false;
  validAddress: boolean = false;
  validMobile: boolean = false;
  validWork: boolean = false;
  validHome: boolean = false;
  validEmail: boolean = false;
  validTwitter: boolean = false;
  validInstagram: boolean = false;
  validGithub: boolean = false;

  constructor(private backend: BackendService) { }

  createContact() {
    this.backend.create(this.newContactFormData)
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
    if (!this.newContactFormData[input]) {
      this[`valid${uppercasedInput}`]= false;
    }
    else if (this.newContactFormData[input].length < 3) {
      this[`valid${uppercasedInput}`] = false;
    }
    else {
      this[`valid${uppercasedInput}`] = true;
    }
  }

  validateEmail() {
    if (!this.newContactFormData.email) {
      this.validEmail = false;
    }
    else if (this.newContactFormData.email.length < 3) {
      this.validEmail = false;
    }
    else if (!this.newContactFormData.email.includes('@')){
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }
  }

   isDisabled(){
    return !this.validFullName || !this.validAddress || !this.validMobile || !this.validWork || !this.validHome || !this.validEmail || !this.validTwitter || !this.validInstagram || !this.validGithub ;
  }

}
