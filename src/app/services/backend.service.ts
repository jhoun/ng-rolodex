import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  register(data){
    return this.http.post('/api/register', data).toPromise();
  }

  login(data){
    return this.http.post('/api/login',data).toPromise();
  }

  logout(){
    return this.http.post('/api/logout', null).toPromise();
  }

  create(data){
    return this.http.post('/api/contacts', data).toPromise();
  }

  getAllContacts(){
    return this.http.get('/api/contacts').toPromise();
  }


}