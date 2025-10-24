import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import FeedPage from '../pageobjects/feed.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I add 'Pokemon Yellow' to my cart$/, async () => {
    
});

When(/^And I click the cart button$/, async () => {

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(FeedPage.flashAlert).toBeExisting();
    await expect(FeedPage.flashAlert).toHaveText(expect.stringContaining(message));
});