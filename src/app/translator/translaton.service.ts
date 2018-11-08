import { Injectable } from '@angular/core';


export class TranslationSet {
  public languange: string;
  public values: {[key: string]: string} = {};
}

@Injectable()
export class TranslationService {

  public languages = ['eng', 'pl'];

  public language = 'eng';

  private dictionary: {[key: string]: TranslationSet} = {
    'eng' : {
      languange: 'eng',
      values: {
        'Zamowienie' : 'Order',
        'Imie' : 'Name',
        'Nazwisko' : 'Surename'
      }
    },
    'pl' : {
      languange: 'pl',
      values: {
        'Order' : 'Zamowienie',
        'Name' : 'Imie',
        'Surename' : 'Nazwisko'
      }
    }
  };

  constructor() { }

  translate(value: string): string {
    console.log('translate called with value ' + value + ' and language ' + this.language);
    if ( this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value];
    }
  }
}
