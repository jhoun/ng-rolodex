import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url:string = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  register(data){
    return Promise.resolve({})
  }

  login(data){
    return Promise.resolve({ username: data.username })
  }

  logout(){
    return Promise.resolve({})
  }


}