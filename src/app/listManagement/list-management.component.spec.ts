import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagementComponent } from './list-management.component';

describe('ListManagementComponent', () => {
  let component: ListManagementComponent;
  let fixture: ComponentFixture<ListManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListManagementComponent]
    });
    fixture = TestBed.createComponent(ListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
