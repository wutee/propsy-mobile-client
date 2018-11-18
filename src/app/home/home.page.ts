import { Component } from '@angular/core';
import {TranslationService} from '../translator/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor (public translationService: TranslationService) { }
}
