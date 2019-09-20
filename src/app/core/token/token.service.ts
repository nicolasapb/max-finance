import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string, rememberMe: boolean): void {
    (rememberMe)
      ? window.localStorage.setItem(KEY, token)
      : window.sessionStorage.setItem(KEY, token);
  }

  getToken(): string {
    return (window.localStorage.getItem(KEY))
      ? window.localStorage.getItem(KEY)
      : window.sessionStorage.getItem(KEY);
  }

  removeToken(): void {
    (window.localStorage.getItem(KEY))
      ? window.localStorage.removeItem(KEY)
      : window.sessionStorage.removeItem(KEY);
  }

}
