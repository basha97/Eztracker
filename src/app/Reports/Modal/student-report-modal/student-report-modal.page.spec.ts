import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReportModalPage } from './student-report-modal.page';

describe('StudentReportModalPage', () => {
  let component: StudentReportModalPage;
  let fixture: ComponentFixture<StudentReportModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReportModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
