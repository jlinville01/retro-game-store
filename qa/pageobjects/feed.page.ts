import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Feed Page selectors and methods
 */
class FeedPage extends Page {

    public get cartButton () {
        return $('#cart-btn');
    }

    /**
     * Add a game to cart
     * @param {string} gameName The video game title to add.
     */
    public async addToCart (gameName: string) {
        await $(`h3=${gameName}`).$('..').$('div').$('button=Add to Cart').click()
        // await $('h3=Pokemon Yellow').$('..').$('div').$('span').$('button=Add to Cart').click()
        await browser.pause(100000);
    }

    /**
     * Click the cart button
     */
    public async clickCartButton () {
        await this.cartButton.click();
    }
}

export default new FeedPage();