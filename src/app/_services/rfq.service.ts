import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDataService } from './UserDataService.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { baseUrl } from '../_environments/environment';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from 'src/Models/apiResponse';
import { timeout } from 'rxjs/operators';
import { TokenService } from 'src/app/_services/token.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { Permission } from 'src/Models/permission';
import { RFQ } from 'src/Models/RFQ';
import { catchError, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RfqService {
  constructor(
    private http: HttpClient,
    private userDataService: UserDataService,
    private router: Router,
    public tokenService: TokenService,
    private authState: AuthStateService
  ) {
    this.userDataService = userDataService; // Initialize the property in the constructor
  }
  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    });
  }
  private getNormalHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getProgBarDuration(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/items/prog-dur`
    const body = {};
    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getNormalHeaders() });
  }
}
