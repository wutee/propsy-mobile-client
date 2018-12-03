import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormService} from '../service/order-form.service';
import {Customer} from '../models/customer';
import { NavController } from '@ionic/angular';
import { TranslationService } from '../../translator/translation.service';

@Component({
  selector: 'app-order-form-component',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})

export class OrderFormComponent implements OnInit {

  payLoad = '';
  form: FormGroup;

  constructor(
    private orderFormService: OrderFormService,
    public translationService: TranslationService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
   });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('teraz dziala');
    this.orderFormService.doSomethingWithCustomerAddress(this.form.value as Customer);
  }

  test() {

  }

}
