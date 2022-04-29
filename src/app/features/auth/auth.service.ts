import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Role } from 'src/app/models/role';
import { LoginResponse, User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User | null = this.getUserInfoFromStorage();
  private _authToken: string | null = this.getTokenFromStorage();
  public loginState$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this._user)

  constructor(private http: HttpClient) { }

  getUserInfoFromStorage(): User | null {
    const userFromStorage = sessionStorage.getItem('user');
    return userFromStorage? JSON.parse(userFromStorage) : null;
  }

  getTokenFromStorage(){
    return sessionStorage.getItem('token');
  }

  storeDetails = (res: LoginResponse) => {
    this._user = res.user;
    this._authToken = res.access_token;
    sessionStorage.setItem('user', JSON.stringify(this._user));
    sessionStorage.setItem('token', this._authToken);
    this.loginState$.next(this._user);
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

  logout(){
    this._user = null;
    this._authToken = null;
    sessionStorage.removeItem('user');
    this.loginState$.next(null);
  }

  createUser(username:string, password: string){
    return this.http.post<LoginResponse>('/api/auth/login', {
      username,
      password
    }).pipe(      
      // tap((response: LoginResponse) => {
      //   this.storeDetails(response);
      // })
      tap(this.storeDetails)
    );
  }
}
