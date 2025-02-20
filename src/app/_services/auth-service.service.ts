import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataService } from './UserDataService.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { baseUrl } from '../_environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse } from 'src/Models/apiResponse';
import { timeout } from 'rxjs/operators';
import { TokenService } from 'src/app/_services/token.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoading: boolean = false; // Initialize the loading flag
  formData = {
    username: '',
    password: '',
  };
  constructor(private http: HttpClient,
    private userDataService: UserDataService,
    private router: Router,
    public tokenService: TokenService,
    private authState: AuthStateService) {
    this.userDataService = userDataService; // Initialize the property in the constructor
  }
  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  updateUsername(username: string) {
    this.userDataService.setUsername(username);
  }
  login(data): Observable<any> {
    const apiUrl = `${baseUrl}/login`;
    const body = { username: data.username, password: data.password };
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(apiUrl, body, { headers: this.getHeaders() });
  }
  logout() {
    //  console.log("Logout requested");
    sessionStorage.clear();
    this.tokenService.removeToken();
    this.authState.setAuthState(true);

    this.router.navigate(['/login']);
  }

  getRequest(url: string, headers: HttpHeaders): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(url, { headers });
  }

  postRequest(url: string, body: Map<string, any>, headers: HttpHeaders): Observable<ApiResponse> {
    const response = this.http.post<ApiResponse>(url, body, { headers });
    //   console.log("postRequest requested");
    return response;
  }
  resetPasswordRequest(body: Map<string, any>): Observable<ApiResponse> {
    // console.log("body in ser",body)
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const data = this.http.post<ApiResponse>(`${baseUrl}/reset-password-request`, body, { headers }).pipe(
      timeout(5000) // Set the timeout value in milliseconds
    );
    return data;
  }

  resetPassword(body: any): Observable<ApiResponse> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const data = this.http.post<ApiResponse>(`${baseUrl}/reset-password`, body, { headers }).pipe(
      timeout(5000) // Set the timeout value in milliseconds
    );

    return data;

  }

  checkWindowsUser(): Observable<any> {
    return this.http.get(`${baseUrl}/check-windows-user`, {
    });
  }
}
