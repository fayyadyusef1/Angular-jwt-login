import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../_services/shared.service';
import { Input, OnInit } from '@angular/core';
import { UserDataService } from '../../_services/UserDataService.service';
import { AuthServiceService } from '../../_services/auth-service.service';
import { Subscription } from 'rxjs';
import { User } from 'src/Models/User';
import { TokenService } from 'src/app/_services/token.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  showBox: boolean = true;
  @Input() isSignedIn: boolean;
  userInfo: User;


  constructor(private sharedService: SharedService,
    public userDataService: UserDataService,
    public authService: AuthServiceService,
    private auth: AuthStateService,
    private router: Router,
    private tokenService: TokenService) {
    // console.log(this.username);
    // console.log(username);

  }

  private usernameSubscription: Subscription | undefined;

  user: User;

  /// menu options will be active according to roleId
  /// roleId : 41 will get all menu options open , 1 admin , 3 is specialist ,4+5 are HOS and HOU with same options 
  // you can change hard coded RoleID in login.component.ts

  ngOnInit(): void {
    this.auth.userInfoState.subscribe((newUserInfo) => {
      this.userInfo = newUserInfo
    });
    console.log('Initial state - isSignedIn:', this.isSignedIn, 'userRoleId:', this.userInfo.roleId);
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }
  changeLanguage(lang: string) {
    this.sharedService.changeLanguage(lang);
  }
  onSidenavClose(): void {
    this.sharedService.closeSidenav();
  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  logout() {
    // console.log("Logout requested");
    this.authService.logout();
    localStorage.removeItem('USER_DATA');
    this.auth.setUserInfoState(
      {
        token: "",
        userId: "",
        email: "",
        position: "",
        upper: "",
        status: "0",
        aliasName: "",
        // username:"",
        roleId: "",
        roleName: "",
        time: "",
      }
    )
    // Close the side navbar after logging out
    if (this.drawer && this.drawer.opened) {
      this.drawer.close();
    }
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  isAllowed(allowedRoleIds: string[]): boolean {
    // console.log('isSignedIn:', this.isSignedIn, 'userRoleId:', this.userInfo.roleId, 'allowedRoles:', allowedRoleIds);
    // Split the string of roles into an array

    const roleArray = allowedRoleIds[0].split(',');
    return this.isSignedIn && roleArray.includes(this.userInfo.roleId.toString());
  }
  closeDrawer(event: MouseEvent) {
    // Check if the clicked element or its parent is disabled
    const clickedElement = event.target as HTMLElement;
    const listItem = clickedElement.closest('mat-list-item');

    if (listItem && !listItem.hasAttribute('disabled')) {
      // This method will be called only when a non-disabled item is clicked
      // We'll use setTimeout to allow the navigation to occur before closing the drawer
      setTimeout(() => {
        if (this.drawer && this.drawer.opened) {
          this.drawer.close();
        }
      }, 300);
    }
  }

  /// menu options will be active according to roleId
  /// roleId : 41 will get all menu options open , 1 admin , 3 is specialist ,4+5 are HOS and HOU with same options 
  // you can change hard coded RoleID in login.component.ts


  // Roles : 
  // 1 : Admin
  // 2 : supplier
  // 3 : Procurement Specialist (DEALER)
  // 4 : HOS
  // 5 : HOU
  // 41 : DEVELOPER (ALL PERMISSIONS)
}
