import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { isComplexPassword } from 'src/app/_helpers/Utils';

@Component({
  selector: 'app-request-forget-password',
  templateUrl: './request-forget-password.component.html',
  styleUrls: ['./request-forget-password.component.css']
})
export class RequestForgetPasswordComponent {
  formGroup: FormGroup;
  // isLoading: boolean = false;
  showPassword = false;
  // email:string;
  username: string;
  default_password: string;
  new_password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService

  ) { }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      // email: ['', Validators.required],
      // username: ['', Validators.required,Validators.pattern('^[a-zA-Z0-9_.-]+$')],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]+$')]],
      default_password: ['', Validators.required],
      new_password: ['', Validators.required],
      re_newpassword: ['', Validators.required]
    }, { validators: this.matchPasswords });
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  submit(event: Event) {

    event.preventDefault();
    if (this.formGroup.valid) {
      this.resetPassword();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  async resetPassword() {
    const formValues = this.formGroup.value;
    const { username, default_password, new_password } = formValues;
    if (!isComplexPassword(new_password)) {
      this.toastr.warning("Password Must Complex");
      return;
    }
    try {
      const resetPassData = {
        'username': username,
        'default_password': default_password,
        'new_password': new_password
      };
      // console.log("resetPassData", resetPassData);
      const resetPassword = await this.authService.resetPassword(resetPassData).toPromise();
      if (resetPassword.code == '1') {
        this.toastr.success(resetPassword.message);
        this.router.navigate(['/login']);
      } else if (resetPassword.code == '-1') {
        this.toastr.warning(resetPassword.message);
      }
    } catch (error) {
      const errorMessage = error.error.message || 'Unknown error';
      this.toastr.warning(errorMessage);
    }
  }
  matchPasswords(control: AbstractControl): { [key: string]: any } | null {
    const new_password = control.get('new_password')?.value;
    const re_newpassword = control.get('re_newpassword')?.value;

    if (new_password !== re_newpassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}
