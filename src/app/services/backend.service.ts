import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse, HttpClient} from '@angular/common/http';

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

    return this.http.post<HttpResponse<Object>>(
              `${this.url}/api/login`,
              data,
              {
                observe: 'response',
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'json',
                withCredentials: true
              }
          ).toPromise()
          // .subscribe(
          //   (resp: HttpResponse<Object>) => {
          //     console.log('Response: ' + JSON.stringify(resp));
          // })
  }

  logout(){
    console.log('hit');
    return this.http.post(`${this.url}/api/logout`, null).toPromise();
    // return Promise.resolve({})
  }


}