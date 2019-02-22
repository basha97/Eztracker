import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupdatePage } from './studentupdate.page';

describe('StudentupdatePage', () => {
  let component: StudentupdatePage;
  let fixture: ComponentFixture<StudentupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
