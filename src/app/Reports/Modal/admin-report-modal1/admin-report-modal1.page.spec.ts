import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportModal1Page } from './admin-report-modal1.page';

describe('AdminReportModal1Page', () => {
  let component: AdminReportModal1Page;
  let fixture: ComponentFixture<AdminReportModal1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportModal1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportModal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
