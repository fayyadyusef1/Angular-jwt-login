import { Component ,OnInit,AfterViewInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions } from 'ag-grid-community';
import { Observable, Subscription, of, takeUntil } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/_services/shared.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrls: ['./list-management.component.css']
})
export class ListManagementComponent  {
 
}