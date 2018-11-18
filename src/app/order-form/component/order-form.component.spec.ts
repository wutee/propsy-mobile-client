import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderFormService } from '../service/order-form.service';
import { IonicModule } from '@ionic/angular';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        IonicModule.forRoot()
       ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        OrderFormService
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
