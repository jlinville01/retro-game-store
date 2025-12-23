import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import products from "../fixtures/products.json";
import { buildCartItem } from "../factories/cart.factory";
import { seedCart } from "../support/state/cart.state";
import CartPage from '../pageobjects/cart.page.ts';

function findProductByName(name: string) {
  const product = products.items.find((p: any) => p.name === name);
  if (!product) throw new Error(`Product not found in fixtures: "${name}"`);
  return product;
}

Given('I have {string} in my cart', async (productName: string) => {
    const product = findProductByName(productName);

    await seedCart([
      buildCartItem(product),
    ]);
    await browser.saveScreenshot('./screenshot.png');
});

Then(/^I expect to land on the cart page$/, async () => {
    await expect(browser).toHaveUrl(baseUrl+'/cart');
}); 

Then(/^I expect the checkout button to be displayed$/, async () => {
    await expect(CartPage.proceedToCheckoutButton).toBeDisplayed()
}); 

When(/^I increase the quantity for (.*)$/, async (gameName) => {
    $(`h3=${gameName}`).$('..').$('..').$('button').$('svg[class="lucide-plus"]').click()
});

When(/^I decrease the quantity for (.*)$/, async (gameName) => {
    $(`h3=${gameName}`).$('..').$('..').$('button').$('svg[class="lucide-minus"]').click()
});

Then(/^I expect the quantity for (.*) to be (.*) $/, async (gameName, quantity) => {
    await expect($(`h3=${gameName}`).$('..').$('..').$('button').$('span')).toEqual(quantity)
});

Then(/^I expect the price to be (.*)$/, async (quantity) => {
    await expect($(`h3=${quantity}`).$('..').$('..').$('div').$('p[class="text-lg font-bold text-secondary"]')).to.include(quantity)
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