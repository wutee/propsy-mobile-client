import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderFormService } from '../service/order-form.service';
import { Customer } from '../models/customer';
import {TranslationService} from "../../translator/translation.service";

@Component({
  selector: 'app-order-form-component',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  payLoad = ''
  form: FormGroup;

  constructor(
    private orderFormService: OrderFormService,
    private translationService: TranslationService
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
      surename: new FormControl(),
      address: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
   });
  }


  ngOnInit() {
  }

  onSubmit() {
    this.orderFormService.doSomethingWithCustomerAddress(this.form.value as Customer)
  }

}
