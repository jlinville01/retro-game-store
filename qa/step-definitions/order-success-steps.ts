import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import OrderSuccessPage from '../pageobjects/order-success.page.ts';

When(/^I click the continue shopping button$/, async () => {
    OrderSuccessPage.clickContinueShoppingButton
});