import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class RestaurantsListPage {

    root = $("app-root");
    restaurants = this.root.$$('ion-card');

    async goToFirstRestaurant() {
        await this.restaurants.first().click();
    }
}