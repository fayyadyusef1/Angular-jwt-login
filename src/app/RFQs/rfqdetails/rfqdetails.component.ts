import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IRowNode, IsRowSelectable } from 'ag-grid-community';
import { handleErrors } from 'src/app/_helpers/Utils';
import { RfqService } from 'src/app/_services/rfq.service';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ColDef, GridOptions, ICellRendererParams } from 'ag-grid-community';
import { FilterdateFormatter, dateFormatter } from 'src/app/_helpers/date-time.service';
import { AgGridAngular } from 'ag-grid-angular';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { MatDialog } from '@angular/material/dialog';
 
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { User } from 'src/Models/User';
;

@Component({
  selector: 'app-rfqdetails',
  templateUrl: './rfqdetails.component.html',
  styleUrls: ['./rfqdetails.component.css']
})
export class RFQdetailsComponent  {
   

  constructor(private route: ActivatedRoute,
    private auth : AuthStateService,
    private rfqService: RfqService,
    private httpClient: HttpClient,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router,
    private usersRolesManagService: UsersRolesManagService,
    private changeDetectorRef: ChangeDetectorRef,

  ) {

  }

}