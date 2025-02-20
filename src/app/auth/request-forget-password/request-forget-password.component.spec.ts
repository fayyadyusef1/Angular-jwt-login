import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForgetPasswordComponent } from './request-forget-password.component';

describe('RequestForgetPasswordComponent', () => {
  let component: RequestForgetPasswordComponent;
  let fixture: ComponentFixture<RequestForgetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForgetPasswordComponent]
    });
    fixture = TestBed.createComponent(RequestForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
