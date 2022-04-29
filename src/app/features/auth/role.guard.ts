import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Role } from 'src/app/models/role';

type RouteData = {
  roles: Role[]
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.loginState$
                    .pipe(
                      map((currentUserInfo: User | null) => {
                        console.log(currentUserInfo);
                        if(currentUserInfo){
                          const userRole = currentUserInfo.role;
                          const allowedRoles = (route.data as RouteData).roles;
                          return allowedRoles.includes(userRole);
                        }
                        return false;
                      })
                    );    
  }
  
}
