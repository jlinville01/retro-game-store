import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
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
        await $(`h3=${gameName}`).$('..').$('button=Add to Cart').click()
    }

    /**
     * Click the cart button
     */
    public async clickCartButton () {
        await this.cartButton.click();
    }
}

export default new FeedPage();