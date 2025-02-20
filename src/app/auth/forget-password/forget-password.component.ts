import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  // isLoading: boolean = false;

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
      // email: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]+$')]],
    });
  }

  async resetPass() {
    // this.isLoading = true; // Set the flag to show the loader
    if (this.formGroup.valid) {
      try {
        const body = this.formGroup.value;
        const resetPasswordReqRes = await this.authService.resetPasswordRequest(body).toPromise();
        const message = resetPasswordReqRes.message;

        if (resetPasswordReqRes.code == '1') {
          this.toastr.success(message);
          this.router.navigate(['/request-forget-password']);
        }
        else {
          this.toastr.warning(message);
        }
      } catch (error) {
        console.error('Error:', error);
        console.error('Full error object:', error);
        const errorMessage = error.error?.message || 'Unknown error';
        this.toastr.warning(errorMessage);
      }
    }
  }
}
