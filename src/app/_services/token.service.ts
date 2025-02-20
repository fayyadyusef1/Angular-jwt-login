import { Injectable } from '@angular/core';
import { baseUrl } from '../_environments/environment';
import { User } from 'src/Models/User';
import { DateTimeService, formatTime } from '../_helpers/date-time.service';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public redirectUrl: string;
  private issuer = {
    login: `${baseUrl}/login`,
  };

  constructor(private sharedService: SharedService) {
  }
  handleData(token: any) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      return true
    }
    else {
      return false;
    }
  }

  getUserInfo() {

    const token = this.getToken();
    if (token) {
      const payload = this.payload(token)
      return {
        token: token,
        userId: payload.userId,
        email: payload.email,
        position: payload.position,
        upper: payload.upper,
        status: payload.status,
        aliasName: payload.aliasName,
        time: formatTime(payload.iat),
        roleId: payload.roleId,
        roleName: payload.roleName,
      };


    }
    else {
      return {
        token: "",
        userId: "",
        email: "",
        position: "",
        upper: "",
        status: "0",
        aliasName: "",
        username: "",
        time: "",
        role: "",
      };

    }
  }
  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }
  userInfo() {
    return this.getUserInfo();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('token');
  }

}
