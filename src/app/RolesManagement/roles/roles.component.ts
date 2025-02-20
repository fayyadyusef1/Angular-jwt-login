import { Component ,OnInit,ViewChild,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CellClickedEvent, ColDef, GridOptions, ICellRendererParams } from 'ag-grid-community';
import { Observable, Subscription, single } from 'rxjs';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { TokenService } from 'src/app/_services/token.service';
import { of } from 'rxjs';
import { AgGridAngular, AgRendererComponent } from 'ag-grid-angular';
import { dateFormatter } from 'src/app/_helpers/date-time.service';

import Swal from 'sweetalert2';
import { handleErrors } from 'src/app/_helpers/Utils';
import { SharedService } from 'src/app/_services/shared.service';
 @Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  
  //gridOptions: any;
  constructor(private http:HttpClient ,
    private router: Router,
    private userService: UsersRolesManagService,
    public tokenService: TokenService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService

    ){   
  }
    }
 