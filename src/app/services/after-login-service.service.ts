import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginServiceService {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.Token.loggedIn();
  }
  constructor(private Token: TokenService) {
    
  }

  addUser(user: any) {
    localStorage.setItem("userInfo", JSON.stringify(user))
  }

  getUser() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      const userInfo = JSON.parse(user);
      return userInfo
    }
  }
}