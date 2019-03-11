import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondPage } from './home-second.page';

describe('HomeSecondPage', () => {
  let component: HomeSecondPage;
  let fixture: ComponentFixture<HomeSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
