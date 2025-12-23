import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (.*) page$/, async (page) => {
    if (page == 'feed') {
        await browser.url(baseUrl)
    } else {
        await browser.url(baseUrl+'/'+page)
    }
});

Given("I have a new browser session", async () => {
  await browser.reloadSession();
});