import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './_services/shared.service';
import { UserDataService } from './_services/UserDataService.service';
import { AuthStateService } from './_services/auth-state.service';
import { TokenService } from './_services/token.service';
import { User } from 'src/Models/User';
import { AuthServiceService } from './_services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSignedIn! : boolean;
  public userInfo:User;
  firstCall:boolean =false;
  // colorControl = new FormControl();
  title : ""
  constructor(private translate: TranslateService,
              sharedServices:SharedService,
              private userDataService: UserDataService,
              private auth : AuthStateService,
              public token : TokenService,
              public authService : AuthServiceService,
              public route:Router,
              public sharedService: SharedService,
    ) {
    // translate.setDefaultLang('en'); // Set default language
    translate.use('en'); // Use the default language initially
  }

  changeLanguage(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
  ngOnInit():void{
    this.auth.userAuthState.subscribe((val)=>{
      this.isSignedIn=val;
    })
 

}}
