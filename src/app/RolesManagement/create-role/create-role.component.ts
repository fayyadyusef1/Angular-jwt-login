import {
  Component, EventEmitter,
  OnInit, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/Models/Role';
import { UsersRolesManagService } from 'src/app/_services/users-roles-manag.service';
import { Permission } from 'src/Models/permission';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/_services/shared.service';
import { Subject, takeUntil } from 'rxjs';
import { quotationValidator } from 'src/app/_helpers/Utils';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent   { 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private UsersRolesManagService: UsersRolesManagService,
  ) { } 
}

