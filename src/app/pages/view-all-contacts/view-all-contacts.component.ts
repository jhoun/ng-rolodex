import { Component, OnInit } from '@angular/core';
import { BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-view-all-contacts',
  templateUrl: './view-all-contacts.component.html',
  styleUrls: ['./view-all-contacts.component.css']
})
export class ViewAllContactsComponent implements OnInit {

  constructor( private backend: BackendService) {
     this.backend.getAllContacts()
    .then( result => {
      console.log('result', result);
    })
  }

  ngOnInit() {

  }

}
