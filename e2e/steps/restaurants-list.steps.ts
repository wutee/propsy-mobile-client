import { RestaurantsListPage } from '../page-objects/restaurants-list'

var { Given, Then, When } = require('cucumber');

const restaurantsListPage = new RestaurantsListPage();

When(/^User selects first restaurant$/, async function () {
    await restaurantsListPage.goToFirstRestaurant();
});
