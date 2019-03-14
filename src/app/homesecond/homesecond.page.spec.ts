import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesecondPage } from './homesecond.page';

describe('HomesecondPage', () => {
  let component: HomesecondPage;
  let fixture: ComponentFixture<HomesecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
