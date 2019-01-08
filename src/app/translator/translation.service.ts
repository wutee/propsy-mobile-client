import {Injectable} from '@angular/core';

@Injectable()
export class TranslationService {

  private dictionaries = {
    English: require('../../../dictionaries/en.json'),
    Polski: require('../../../dictionaries/pl.json'),
  };

  public languages = Object.keys(this.dictionaries);
  public language = this.languages[0];

  constructor() {
  }

  translate(value: string): string {
    if (this.dictionaries[this.language][value]) {
      return this.dictionaries[this.language][value];
    }
    return this.dictionaries.English[value];
  }
}
