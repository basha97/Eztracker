import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleupdatePage } from './multipleupdate.page';

describe('MultipleupdatePage', () => {
  let component: MultipleupdatePage;
  let fixture: ComponentFixture<MultipleupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
