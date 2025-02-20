import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TokenService } from './token.service'; 
import { User } from 'src/Models/User';
@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private userInfo = new BehaviorSubject<User>(this.token.userInfo());
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn()!);

  
  userAuthState = this.userState.asObservable();
  userInfoState = this.userInfo.asObservable();
  
  
  constructor(public token: TokenService) {}
  setAuthState(value: boolean) {
    this.userState.next(value);
  }
  setUserInfoState(value: User) {
    this.userInfo.next(value);
  }
}