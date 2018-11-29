import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './component/order-form.component';
import { TranslateModule } from '../translator/translate.module';
import { TranslationService } from '../translator/translation.service';
import { TranslatePipe } from '../translator/translate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [OrderFormComponent],
  exports: [OrderFormComponent]
})
export class OrderFormModule { }
