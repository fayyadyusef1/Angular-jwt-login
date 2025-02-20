import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFQdetailsComponent } from './rfqdetails.component';

describe('RFQdetailsComponent', () => {
  let component: RFQdetailsComponent;
  let fixture: ComponentFixture<RFQdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RFQdetailsComponent]
    });
    fixture = TestBed.createComponent(RFQdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
