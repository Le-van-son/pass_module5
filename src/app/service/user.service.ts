import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
const API_URL = 'http://localhost:8000';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL+'/users');
  };
  login(user: User): Observable<any> {
    return this.httpClient.post(API_URL +'/login', user);
  }
  register(user: User): Observable<any> {
    return this.httpClient.post(API_URL +'/register', user);
  }
  getProfile(id: any): Observable<User> {
    return this.httpClient.get<User>(API_URL + '/users/' + id);
  }
}
