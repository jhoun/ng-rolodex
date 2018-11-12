import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  isLoggedIn(){
    if(this.session.isLoggedIn()){
      return true;
    } else {
      return this.router.navigate(['/login'])
    }
  }


}
