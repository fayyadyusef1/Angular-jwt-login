import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { baseUrl } from 'src/app/_environments/environment';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/_services/UserDataService.service';
import { User } from 'src/Models/User';
import {
  DateTimeService,
  formatTime,
} from 'src/app/_helpers/date-time.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/_services/token.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { handleErrors } from 'src/app/_helpers/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSignedIn!: boolean;
  formGroup: FormGroup;
  isLoading: boolean = false;
  showPassword = false;
  username: string | null = sessionStorage.getItem('username');
  constructor(
    public authService: AuthServiceService,
    private router: Router,
    private UserDataService: UserDataService,
    private dateTimeService: DateTimeService,
    private toastr: ToastrService,
    public auth: AuthServiceService,
    public tokenService: TokenService,
    private authState: AuthStateService
  ) {
    this.formGroup = new FormGroup({
      password: new FormControl(''),
    });
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  async login(data: Map<string, any>, event: Event) {
    event.preventDefault();
    if (this.formGroup.valid) {
      this.isLoading = true; // Set the flag to show the loader
      try {
        // const LoginResponse = await this.authService.login(data).toPromise();

        // Hardcoded Login response
        const LoginResponse = {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwLCJlbWFpbCI6IllVT1NFRi5GQEhPVE1BSUwuQ09NIiwicG9zaXRpb24iOiJTb2Z0d2FyZSBEZXZlbG9wZXIiLCJ1cHBlciI6IkpvZU1hYyIsInN0YXR1cyI6IjEiLCJhbGlhc05hbWUiOiJZT1VTRUYtRkFZIiwicm9sZU5hbWUiOiJERVZFTE9QRVIiLCJyb2xlSWQiOjQxLCJpYXQiOjE3MjQ4NDA0NDQsImV4cCI6MTcyNDkyNjg0NH0.L2CvfjtNl5UYR9uSgUKmiInmSxvYAb_6sTaMoa7IIKIeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwLCJlbWFpbCI6IllVT1NFRi5GQEhPVE1BSWNMLkNPTSIsInBvc2l0aW9uIjoiU29mdHdhcmUgRGV2ZWxvcGVyIiwidXBwZXIiOiJKb2VNYWMiLCJzdGF0dXMiOiIxIiwiYWxpYXNOYW1lIjoiWU9VU0VGLUZBWSIsInJvbGVOYW1lIjoiREVWRUxPUEVSIiwicm9sZUlkIjo0MSwiaWF0IjoxNzI0ODQwNDQ0LCJleHAiOjE3MjQ5MjY4NDR9.NLvskwC6izj8MQ0MritBEaPKVOiSX4Q36S88XPVrx_Q',
          message: 'Login Successfully',
          code: '1',
        };
        const code = LoginResponse.code;
        const message = LoginResponse.message;
        if (LoginResponse.code == '1' && !this.tokenService.redirectUrl) {
          const token = LoginResponse['token'];
          localStorage.setItem('token', token);

          // Mock the payload function
          const payload = {
            userId: '30',
            email: 'fayyadyusef@gmail.com',
            position: 'Software Developer',
            upper: 'JoeMac',
            status: '1',
            aliasName: 'YOUSEF-FAY',
            roleId: '41',
            roleName: 'Developer - You Have All Permissions',
            iat: 1724840444,
          };
          /// menu options will be active according to roleId
          /// roleId : 41 will get all menu options open , 1 admin , 3 is specialist ,4+5 are HOS and HOU with same options
          const userinfo = {
            userId: payload.userId,
            time: formatTime(payload.iat),
            token: token,
            roleId: payload.roleId,
            roleName: payload.roleName,
            email: payload.email,
            position: payload.position,
            upper: payload.upper,
            status: payload.status,
            aliasName: payload.aliasName,
          };
          console.log('userinfo: ', userinfo);

          this.authState.setAuthState(true);
          this.authState.setUserInfoState(userinfo);
          this.router.navigate(['/home']);
          this.toastr.success(
            'Welcome ' + userinfo.aliasName + ' !',
            LoginResponse.message
          );
        } else if (LoginResponse.code == '1' && this.tokenService.redirectUrl) {
          this.toastr.success(LoginResponse.message);

          this.router.navigateByUrl(this.tokenService.redirectUrl);
        } else if (code == '-2') {
          // means that user logging in with default password
          // console.log("LoginResponse.code", code)
          this.router.navigate(['/request-forget-password']);
          this.toastr.warning(message);
        } else {
          this.toastr.warning(LoginResponse.message);
        }
      } catch (error) {
        console.error('Error:', error);
        const errorMessage = await handleErrors(error.status, error.statusText);
        this.toastr.warning(errorMessage);
      } finally {
        this.isLoading = false;
      }
    }
  }
  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
}
