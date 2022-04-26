import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Role } from 'src/app/models/role';
import { LoginResponse, User } from 'src/app/models/user';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user?: User;
  private _authToken?: string;

  constructor(private http: HttpClient) { }

  storeDetails(res: LoginResponse){
    //store in sessionStorage
    this._user = res.user;
    this._authToken = res.access_token;
    sessionStorage.setItem("doctorSession", stringify({user:this._user, token: this._authToken}))
  }

  isUserLoggedIn(): boolean{
    return !!this._authToken;
  }

  getAuthToken(){
    return this._authToken;
  }

  getUserRole(): Role | undefined {
    return this._user?.role;
  }

  getUserDetails(){
    return this._user;
  }

  createUser(){
    return this.http.post<LoginResponse>('/api/auth/login', {
      username: 'john',
      password: 'changeme'
    }).pipe(      
      tap((response: LoginResponse) => {
        this.storeDetails(response);
      })
    );
  }
}
