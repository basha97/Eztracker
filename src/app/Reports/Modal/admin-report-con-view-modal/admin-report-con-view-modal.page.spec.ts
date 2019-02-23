import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportConViewModalPage } from './admin-report-con-view-modal.page';

describe('AdminReportConViewModalPage', () => {
  let component: AdminReportConViewModalPage;
  let fixture: ComponentFixture<AdminReportConViewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportConViewModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportConViewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
