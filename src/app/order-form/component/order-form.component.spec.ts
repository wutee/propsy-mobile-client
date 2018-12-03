import {CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderFormComponent} from './order-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderFormService} from '../service/order-form.service';
import {TranslationService} from '../../translator/translation.service';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '../../translator/translate.module';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {OrderFormModule} from '../order-form.module';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ OrderFormComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule.forRoot(),
        TranslateModule.forChild(),
        OrderFormModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  it('should render title in a ion-title tag', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Order');
  });

  it('form should be invalid', async () => {
    component.form.controls['name'].setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid', async () => {
    component.form.controls['name'].setValue('Jan');
    component.form.controls['surname'].setValue('Kowalski');
    component.form.controls['address'].setValue('Marszalkowska 108/22');
    component.form.controls['zipCode'].setValue('01-111');
    component.form.controls['city'].setValue('Warszawa');
    expect(component.form.valid).toBeTruthy();
  });

  xit('should not call the onSubmit method when form is invalid', async () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should call the onSubmit method', async () => {
    await component.form.controls['name'].setValue('Jan');
    await component.form.controls['surname'].setValue('Kowalski');
    await component.form.controls['address'].setValue('Marszalkowska 108/22');
    await component.form.controls['zipCode'].setValue('01-111');
    await component.form.controls['city'].setValue('Warszawa');
    spyOn(component, 'onSubmit');

    const element = fixture.debugElement.nativeElement.querySelector('ion-button');

    element.click();
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();

    // spyOn(component, 'onEditButtonClick');
    //
    // let button = fixture.debugElement.nativeElement.querySelector('button');
    // button.click();
    //
    // fixture.whenStable().then(() => {
    //   expect(component.onEditButtonClick).toHaveBeenCalled();
    // })
  });
});

// document.querySelector('form').querySelector('ion-button').shadowRoot.querySelector('button').click()
