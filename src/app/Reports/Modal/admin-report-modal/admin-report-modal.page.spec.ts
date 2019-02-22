import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportModalPage } from './admin-report-modal.page';

describe('AdminReportModalPage', () => {
  let component: AdminReportModalPage;
  let fixture: ComponentFixture<AdminReportModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
