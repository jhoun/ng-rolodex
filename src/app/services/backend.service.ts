import { Injectable } from '@angular/core';
import {HttpEvent, HttpParams, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse, HttpClient} from '@angular/common/http';

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
    console.log('data', data);
  //   let enco : any = new HttpHeaders()
  //       .set('Content-Type', 'application/x-www-form-urlencoded');

  //   let body : any = new HttpParams()
  //   .set('username', data.username)
  //   .set('password', data.password);
  //   return this.http.post<HttpResponse<Object>>(`${this.url}/api/login`,
  //    body,
  //    {
  //      headers: enco,withCredentials:true
  //    }
  //  ).toPromise();

    return this.http.post<HttpResponse<Object>>(
      `/api/login`,
        data,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
          responseType: 'json',
          withCredentials: true
        }
    )
    .toPromise()
  }

  logout(){
    console.log('hit');
    return this.http.post(`/api/logout`, null).toPromise();
  }


}