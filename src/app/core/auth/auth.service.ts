import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authenticate(userName: string, password: string, rememberMe: boolean) {
    return this.http.post(API_URL + '/user/login', { userName, password }, { observe: 'response' })
      .pipe( tap( res => {
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken, rememberMe);
      }));
  }

}
