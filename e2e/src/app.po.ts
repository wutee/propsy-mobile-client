import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToPath(path: String) {
    return browser.get('/' + path);
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-title')).getText();
  }

  getRestaurantButton() {
    return element(by.id('tabpanel-t-0-0'));
  }

  getBucketButton() {
    return element(by.id('tabpanel-t-0-1'));
  }

  getOrderButton() {
    return element(by.id('tabpanel-t-0-2'));
  }
}
