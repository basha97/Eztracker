import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskupdatePage } from './taskupdate.page';

describe('TaskupdatePage', () => {
  let component: TaskupdatePage;
  let fixture: ComponentFixture<TaskupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
