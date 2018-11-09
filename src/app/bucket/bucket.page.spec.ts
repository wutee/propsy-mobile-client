import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BucketPage} from "./bucket.page";

describe('BucketPage', () => {
  let component: BucketPage;
  let fixture: ComponentFixture<BucketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
