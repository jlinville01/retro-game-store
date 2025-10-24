import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CheckoutPage from '../../pageobjects/checkout.page.js';

When(/^I click the back to cart button$/, async () => {
    CheckoutPage.clickBackToCartButton
});

When(/^I click the place order button$/, async () => {
    CheckoutPage.ClickPlaceOrderButton
});

Then(/^I expect to see error message for empty full name input$/, async () => {
    await expect($(CheckoutPage.fillFullNameInput).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('Name is required'));
});

Then(/^I expect to see error message for empty address line 1 input$/, async () => {
    await expect($(CheckoutPage.addressLine1Input).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('Address is required'));
});

Then(/^I expect to see error message for empty city input$/, async () => {
    await expect($(CheckoutPage.cityInput).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('City is required'));
});

Then(/^I expect to see error message for empty state dropdown$/, async () => {
    await expect($(CheckoutPage.stateDropdown).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('State is required'));
});

Then(/^I expect to see error message for empty zip code input$/, async () => {
    await expect($(CheckoutPage.zipCodeInput).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('Zip code is required'));
});

Then(/^I expect to see error message for empty credit card input$/, async () => {
    await expect($(CheckoutPage.creditCardInput).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('Credit card number is required'));
});

Then(/^I expect to see error message for invalid credit card input$/, async () => {
    await expect($(CheckoutPage.creditCardInput).$('..').$('p[class="text-sm text-destructive"]')).toHaveText(expect.stringContaining('Invalid credit card number. Use 4242 4242 4242 4242 for testing'));
});

When(/^I enter (.*) into the full name imput$/, async (fullName) => {
    await CheckoutPage.fillFullNameInput(fullName)
});

When(/^I enter (.*) into the address line 1 imput$/, async (address1) => {
    await CheckoutPage.fillAddressLine1Input(address1)
});

When(/^I enter (.*) into the address line 2 imput$/, async (address2) => {
    await CheckoutPage.fillAddressLine2Input(address2)
});

When(/^I enter (.*) into the city imput$/, async (city) => {
    await CheckoutPage.fillCityInput(city)
});

When(/^I select (.*) from the state dropdown$/, async (state) => {
    await CheckoutPage.selectStateDropdown(state)
});

When(/^I enter (.*) into the zip code imput$/, async (zipCode) => {
    await CheckoutPage.fillZipCodeInput(zipCode)
});

When(/^I enter (.*) into the credit card imput$/, async (creditCard) => {
    await CheckoutPage.fillCreditCardInput(creditCard)
});

When(/^I place order with template test data$/, async () => {
    CheckoutPage.placeOrder("John Smith", "123 First Street", "", "Los Angeles", "California", 12345, 4242424242424242)
});
