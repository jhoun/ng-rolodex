import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url:string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(data){
    return this.http.post(`${this.url}/api/register`, data).toPromise();
  }

  login(data){
    return this.http.post(`${this.url}/api/login`, data).toPromise();
  }

  logout(){
    return Promise.resolve({})
  }


}