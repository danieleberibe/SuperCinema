import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient) { }

  getUser(){ 
    return this.http.get(baseUrl);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  createTicket(data: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/ticket/", data);
  }


}
