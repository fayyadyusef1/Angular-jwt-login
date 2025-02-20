import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Observable, Subscription, of } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent  {
 
}

