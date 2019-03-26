import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multipleupdatemodal2Page } from './multipleupdatemodal2.page';

describe('Multipleupdatemodal2Page', () => {
  let component: Multipleupdatemodal2Page;
  let fixture: ComponentFixture<Multipleupdatemodal2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Multipleupdatemodal2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multipleupdatemodal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
