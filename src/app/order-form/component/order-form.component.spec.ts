import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderFormComponent} from './order-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslatePipe} from '../../translator/translate.pipe';
import {OrderFormService} from '../service/order-form.service';
import {TranslationService} from '../../translator/translation.service';
import {IonicModule} from '@ionic/angular';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormComponent, TranslatePipe ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        IonicModule.forRoot()
       ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        OrderFormService,
        TranslationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
