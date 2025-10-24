import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CartPage from '../pageobjects/cart.page.ts';

Then(/^I expect to land on the cart page$/, async () => {
    await expect(browser).toHaveUrl(baseUrl+'/cart');
}); 

When(/^I increase the quantity for (.*)$/, async (gameName) => {
    $(`h3=${gameName}`).$('..').$('..').$('button').$('svg[class="lucide-plus"]').click()
});

When(/^I decrease the quantity for (.*)$/, async (gameName) => {
    $(`h3=${gameName}`).$('..').$('..').$('button').$('svg[class="lucide-minus"]').click()
});

Then(/^Then I expect the quantity for (,*) to be (.*) $/, async (gameName, quantity) => {
    await expect($(`h3=${gameName}`).$('..').$('..').$('button').$('span')).toEqual(quantity)
});

Then(/^And I expect the price to be (.*)$/, async (quantity) => {
    await expect($(`h3=${gameName}`).$('..').$('..').$('div').$('p[class="text-lg font-bold text-secondary"]')).to.include(quantity)
});

When(/^I click the remove button for (.*)$/, async (gameName) => {
    $(`h3=${gameName}`).$('..').$('..').$('button').$('svg[class="lucide-trash2"]').click()
});

Then(/^I expect the empty cart message to be displayed$/, async (message) => {
    await expect($('h2=Your cart is empty}')).toBeDisplayed()
});

Then(/^I expect the start shopping button to be displayed$/, async () => {
    await expect(CartPage.startShoppingButton).toBeDisplayed()
});

When(/^I click the proceed to checkout button$/, async () => {
    CartPage.clickCheckoutButton
});