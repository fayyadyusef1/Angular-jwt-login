import { User } from './../../../Models/User';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Observable, Subscription, of } from 'rxjs';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { TokenService } from 'src/app/_services/token.service';
import { AgGridAngular } from 'ag-grid-angular';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/_services/shared.service';
import { GenericApiResponse } from 'src/Models/apiResponse';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsersRolesManagService,
    public tokenService: TokenService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService
  ) {
 
  } }