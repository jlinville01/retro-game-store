import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import FeedPage from '../pageobjects/feed.page.ts';

When(/^I add "([^"]*)" to my cart$/, async (gameName) => {
    FeedPage.addToCart(gameName)
});

When(/^I click the cart button$/, async () => {
    FeedPage.clickCartButton()
});

Then(/^my cart should have "([^"]*)" value$/, async (quantity) => {
    await expect(FeedPage.cartButton.$('span')).toHaveText(quantity)
});

Then(/^I expect to land on the feed page$/, async (quantity) => {
    await expect(browser).toHaveUrl(baseUrl);
}); 