import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class Navigation {

    root = $("app-root");

    async applicationIsPresent() {
        await this.root.isPresent();
    }
}