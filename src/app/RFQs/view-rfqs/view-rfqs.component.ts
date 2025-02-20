import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CellClickedEvent, ColDef, GridOptions, ICellRendererParams } from 'ag-grid-community';
import { Observable, Subscription, single } from 'rxjs';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { TokenService } from 'src/app/_services/token.service';
import { of } from 'rxjs';
import { AgGridAngular, AgRendererComponent } from 'ag-grid-angular';
import { dateFormatter, FilterdateFormatter } from 'src/app/_helpers/date-time.service';

import Swal from 'sweetalert2';
import { RfqService } from 'src/app/_services/rfq.service';
import { handleErrors } from 'src/app/_helpers/Utils';
import { ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-rfqs',
  templateUrl: './view-rfqs.component.html',
  styleUrls: ['./view-rfqs.component.css']
})
export class ViewRfqsComponent   {
 
  constructor(private http: HttpClient,
    private router: Router,
    private rfqService: RfqService,
    public tokenService: TokenService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private userService: UsersRolesManagService
  ) {
   }
 
}



