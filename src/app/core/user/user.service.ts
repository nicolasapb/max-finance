import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =  new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    // tslint:disable-next-line: no-unused-expression
    this.tokenService.hasToken &&
      this.decodeAndNotify();
  }

  setToken(token: string, rememberMe: boolean): void {
    this.tokenService.setToken(token, rememberMe);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

}
