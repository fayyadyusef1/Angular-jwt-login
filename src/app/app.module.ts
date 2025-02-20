import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Common-widgets/navbar/navbar.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { SpinnerComponent } from './Common-widgets/spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { RequestForgetPasswordComponent } from './auth/request-forget-password/request-forget-password.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { UsersComponent } from './RolesManagement/users/users.component';
import { RolesComponent } from './RolesManagement/roles/roles.component';
import { CreateRoleComponent } from './RolesManagement/create-role/create-role.component';
import { ToggleSwitchModule } from 'angular-toggle-switch';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ListManagementComponent } from './listManagement/list-management.component';
import { SupplierListComponent } from './Supplier/supplier-list/supplier-list.component';
import { HttpInterceptorService } from './_services/http.interceptor';
import { CreateEditRfqComponent } from './RFQs/create-rfq/create-edit-rfq.component';
import {MatStepperModule} from '@angular/material/stepper'; 
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
// import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatMomentDatetimeModule } from '@angular-material-components/datetime-picker';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxUploaderModule } from 'ngx-uploader';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingInterceptor } from './_services/loading.interceptor';
import { AppRoutingModule } from './app.routes';
import { DatePipe } from '@angular/common';
import { ViewRfqsComponent } from './RFQs/view-rfqs/view-rfqs.component';
import {SharedService} from './_services/shared.service'
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {RFQdetailsComponent} from './RFQs/rfqdetails/rfqdetails.component';
import { FooterComponent } from './Common-widgets/footer/footer.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ReportsComponent } from '../app/Reports/reports.component';
import { ProgressBarComponent } from './Common-widgets/progress-bar/progress-bar.component';
 
@NgModule({
  declarations: [
    RFQdetailsComponent,
    AppComponent,
    UsersComponent,
    NavbarComponent,
    LoginComponent,
    SpinnerComponent,
    HomeComponent,
    ForgetPasswordComponent,
    RequestForgetPasswordComponent,
    RolesComponent,
    CreateRoleComponent,
    ListManagementComponent,
    SupplierListComponent,
    CreateEditRfqComponent,
    ViewRfqsComponent,
    FooterComponent,
    ReportsComponent,
    ProgressBarComponent,
    ],
  imports: [   
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    NgxMatFileInputModule,
    AppRoutingModule,
    MatChipsModule,
    NgxUploaderModule,
    MatDatepickerModule,
    MatDatetimepickerModule, MatNativeDatetimeModule,
    MatFormFieldModule,
    NgxMatMomentModule,
    // NgxMatDatetimePickerModule, NgxMatTimepickerModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSlideToggleModule,
    BrowserModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
        progressAnimation: 'decreasing',
        //disableTimeOut :true,
        closeButton: true,
        // toastClass : "Notyf"

      }
    ),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },SharedService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})

export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
