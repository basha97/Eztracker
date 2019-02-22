import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReportPage } from './student-report.page';

describe('StudentReportPage', () => {
  let component: StudentReportPage;
  let fixture: ComponentFixture<StudentReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
