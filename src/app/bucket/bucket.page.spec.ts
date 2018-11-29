import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPage } from './bucket.page';
import { TranslateModule } from '../translator/translate.module';
import { TranslationService } from '../translator/translation.service';

describe('BucketPage', () => {
  let component: BucketPage;
  let fixture: ComponentFixture<BucketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketPage],
      imports: [
        TranslateModule.forChild(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        TranslationService
      ]
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
