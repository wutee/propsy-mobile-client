import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';

describe('Pipe: Translatee', () => {
  it('create an instance', () => {
    let pipe = new TranslatePipe(new TranslationService());
    expect(pipe).toBeTruthy();
  });
});
