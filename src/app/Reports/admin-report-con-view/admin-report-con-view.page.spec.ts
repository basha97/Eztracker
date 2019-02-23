import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportConViewPage } from './admin-report-con-view.page';

describe('AdminReportConViewPage', () => {
  let component: AdminReportConViewPage;
  let fixture: ComponentFixture<AdminReportConViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportConViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportConViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
