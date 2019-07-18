import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import config from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = null;

  constructor(public  jwtHelper: JwtHelperService, private httpClient: HttpClient) { }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.jwtHelper.tokenGetter());
  }

  public logout(): void {
    localStorage.clear();
  }

  public login(email: string, password: string): void {
    this.httpClient.post<any[]>(config.url + 'users', {email, password})
      .subscribe(
        (response: any) => {
          if (response !== null) {
            this.user = response;
            this.setUserSession();
          }
        },
        err => this.user = null
      );
  }

  /**
   * Complete this function when the user interface will be complete
   */
  private setUserSession(): void {
    localStorage.setItem(config.keyToken, '');
  }
}
