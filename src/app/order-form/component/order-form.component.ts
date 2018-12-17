import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormService} from '../service/order-form.service';
import {Customer} from '../models/customer';
import {ActivatedRoute} from '@angular/router';
import { TranslationService } from '../../translator/translation.service';

@Component({
  selector: 'app-order-form-component',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})

export class OrderFormComponent implements OnInit {

  payLoad = '';
  id: string;
  form: FormGroup;

  constructor(
    private orderFormService: OrderFormService,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    this.orderFormService.doSomethingWithCustomerAddress(this.form.value as Customer);
  }
}
