import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskaddPage } from './taskadd.page';

describe('TaskaddPage', () => {
  let component: TaskaddPage;
  let fixture: ComponentFixture<TaskaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
