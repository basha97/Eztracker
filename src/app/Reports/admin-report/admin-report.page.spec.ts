import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportPage } from './admin-report.page';

describe('AdminReportPage', () => {
  let component: AdminReportPage;
  let fixture: ComponentFixture<AdminReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
