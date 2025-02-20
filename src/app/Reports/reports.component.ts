import { Component, OnInit, ViewChild, AfterViewInit,NgZone  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CellClickedEvent, ColDef, GridOptions, ICellRendererParams } from 'ag-grid-community';
import { Observable, Subscription, single } from 'rxjs';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { TokenService } from 'src/app/_services/token.service';
import { of } from 'rxjs';
import { AgGridAngular, AgRendererComponent } from 'ag-grid-angular';
import Swal from 'sweetalert2';
import { RfqService } from 'src/app/_services/rfq.service';
import { handleErrors } from 'src/app/_helpers/Utils';
import { ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { dateFormatter } from '../_helpers/date-time.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  {
 

}
