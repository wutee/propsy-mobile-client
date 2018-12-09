import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display orders page', () => {
    page.navigateToPath('tabs/(orders:orders)');
    expect(page.getParagraphText()).toEqual('Orders');
  });

  it('should display restaurant page', () => {
    page.navigateToPath('tabs/(restaurant:restaurant)');
    expect(page.getParagraphText()).toEqual('Restaurants');
  });

  it('should display bucket page', () => {
    page.navigateToPath('tabs/(bucket:bucket)');
    expect(page.getParagraphText()).toEqual('Cart');
  });

  it('should display restaurants button', () => {
    page.navigateTo();
    expect(page.getRestaurantButton().getText()).toEqual('');
  });

  it('should display bucket button', () => {
    page.navigateTo();
    expect(page.getBucketButton().getText()).toEqual('');
  });

});
