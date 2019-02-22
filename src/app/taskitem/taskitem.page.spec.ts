import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemPage } from './taskitem.page';

describe('TaskitemPage', () => {
  let component: TaskitemPage;
  let fixture: ComponentFixture<TaskitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
