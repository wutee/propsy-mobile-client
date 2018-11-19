import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TranslatePipe],
  exports: [TranslatePipe],
  providers: [TranslationService, TranslatePipe]
})
export class TranslateModule { }
