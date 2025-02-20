import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_services/AuthGuard.service';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { RequestForgetPasswordComponent } from './auth/request-forget-password/request-forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './RolesManagement/users/users.component';
import { RolesComponent } from './RolesManagement/roles/roles.component';
import { CreateRoleComponent } from './RolesManagement/create-role/create-role.component';
import { AdminGuard } from './_services/authorization-guard.service';
import { ListManagementComponent } from './listManagement/list-management.component';
import { SupplierListComponent } from './Supplier/supplier-list/supplier-list.component';
import { CreateEditRfqComponent } from './RFQs/create-rfq/create-edit-rfq.component';
import { ViewRfqsComponent } from './RFQs/view-rfqs/view-rfqs.component';
import { RFQdetailsComponent } from './RFQs/rfqdetails/rfqdetails.component';
import { ReportsComponent } from '../app/Reports/reports.component';


export const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'request-forget-password', component: RequestForgetPasswordComponent },
  { path: 'request-forget-password', component: RequestForgetPasswordComponent },
  { path: 'create-edit-rfq', component: CreateEditRfqComponent, canActivate: [AuthGuard]  },
  { path : 'view-rfqs',component:ViewRfqsComponent, canActivate: [AuthGuard]},
  { path: 'rfqdetails/:id', component: RFQdetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard] },
  { path: 'create-role', component: CreateRoleComponent , canActivate: [AuthGuard]},
  { path: 'list-management', component: ListManagementComponent , canActivate: [AuthGuard] },
  { path: 'SupplierListComponent', component: SupplierListComponent , canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent , canActivate: [AuthGuard] },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
}) 
export class AppRoutingModule { }