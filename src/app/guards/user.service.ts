import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../interface/register';
const API_URL = 'http://localhost:4300/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public evn = environment;
  constructor(
    private http: HttpClient
  ) { }

  userList(){
    return this.http.get(`${this.evn.userApi}/users`)
  }

  adminList(){
    return this.http.get(`${this.evn.adminApi}/users?page=1`)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
