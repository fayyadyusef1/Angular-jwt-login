import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRfqsComponent } from './view-rfqs.component';

describe('ViewRfqsComponent', () => {
  let component: ViewRfqsComponent;
  let fixture: ComponentFixture<ViewRfqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRfqsComponent]
    });
    fixture = TestBed.createComponent(ViewRfqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
