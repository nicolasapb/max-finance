import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser } from './new-user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(API_URL + '/user/exists/' + userName);
  }

  signup(newUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(API_URL + '/user/signup', newUser, this.httpOptions);
  }

}
