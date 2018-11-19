import {Injectable} from '@angular/core';


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
        'Order' : 'Order',
        'Name' : 'Name',
        'Surename' : 'Surename',
        'Adress' : 'Adress',
        'Zipcode' : 'Zip code',
        'City' : 'City',
        'Submit' : 'Submit',
        'cart' : 'Cart',
        'goToStore' : 'Go to store'
      }
    },
    'pl' : {
      languange: 'pl',
      values: {
        'Order' : 'Zamowienie',
        'Name' : 'Imie',
        'Surename' : 'Nazwisko',
        'Adress' : 'Adres',
        'Zipcode' : 'Kod pocztowy',
        'City' : 'Miasto',
        'Submit' : 'Potwierdź',
        'cart' : 'Koszyk',
        'goToStore' : 'Do sklepu'
      }
    }
  };

  constructor() { }

  translate(value: string): string {
    if ( this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value];
    }
  }
}
