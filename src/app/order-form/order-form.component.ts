import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormService} from './order-form.service';
import {Customer} from './customer';
import {ActivatedRoute} from '@angular/router';
import { TranslationService } from '../translator/translation.service';
import {Router} from '@angular/router';
import {BucketService} from '../bucket/bucket.service';

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
    public translationService: TranslationService,
    private router: Router,
    public bucketService: BucketService
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
    this.router.navigateByUrl('/payment');
  }
}
