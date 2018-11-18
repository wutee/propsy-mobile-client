import { Injectable } from '@angular/core';

declare function require(url: string);
const variable = require('../../dictionary/dictionary.json');

@Injectable()
export class TranslationService {

  public languages = ['eng', 'pl'];
  public language = 'eng';

  constructor() { }

  translate(value: string): string {
    if ( variable[this.language] != null) {
      return variable[this.language].values[value];
    }
  }
}
