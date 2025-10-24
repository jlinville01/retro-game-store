import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CartPage from '../../pageobjects/cart.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I increase the quantity for (.*)$/, async () => {

});

Then(/^Then I expect the quantity to be (.*)$/, async () => {

});

Then(/^And I expect the price to be (.*)$/, async (message) => {
    await expect(CartPage.flashAlert).toBeExisting();
    await expect(CartPage.flashAlert).toHaveText(expect.stringContaining(message));
});