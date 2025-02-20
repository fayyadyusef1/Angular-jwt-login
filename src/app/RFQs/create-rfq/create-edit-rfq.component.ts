import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import Swal from 'sweetalert2';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { RfqService } from 'src/app/_services/rfq.service';
import { handleErrors } from 'src/app/_helpers/Utils';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-create-edit-rfq',
  templateUrl: './create-edit-rfq.component.html',
  styleUrls: ['./create-edit-rfq.component.css']
})
export class CreateEditRfqComponent  {
  
  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private datePipe: DatePipe,
    private userService: UsersRolesManagService,
    private rfqService: RfqService,
    private router: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {
 
  }

}
