import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditRfqComponent } from './create-edit-rfq.component';

describe('CreateEditRfqComponent', () => {
  let component: CreateEditRfqComponent;
  let fixture: ComponentFixture<CreateEditRfqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditRfqComponent]
    });
    fixture = TestBed.createComponent(CreateEditRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
