import { Navigation } from '../page-objects/navigation'

var { Given, Then, When } = require('cucumber');

const navigation = new Navigation();

Given(/^Application is started$/, async function () {
    await navigation.applicationIsPresent();
});



Then(/^I should see my new task in the list$/, function () {
    return 'pending';
});

