import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReport2Page } from './admin-report2.page';

describe('AdminReport2Page', () => {
  let component: AdminReport2Page;
  let fixture: ComponentFixture<AdminReport2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReport2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReport2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
