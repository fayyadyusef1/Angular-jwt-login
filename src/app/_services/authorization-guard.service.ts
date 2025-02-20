import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserDataService } from './UserDataService.service';
import { TokenService } from './token.service';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard {

  constructor(private router: Router,
    private userDataService: UserDataService,
    private authService: AuthServiceService,
    private tokenService: TokenService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.tokenService.getUserInfo().roleId === 1) {
      return true;
    }

    this.tokenService.redirectUrl = state.url;
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;

  }

}
