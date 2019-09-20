import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';
import { User } from 'src/app/pages/home/shared/user.model';

const API_PATH = 'api/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // authenticate(): Observable<User> {

  // }

}
