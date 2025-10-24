import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderSuccessPage extends Page {

    public get cartButton () {
        return $('#cart-btn');
    }

    public get continueShopping () {
        return $('button=Continue Shopping');
    }

    /**
     * Click the cart button
     */
    public async clickCartButton () {
        await this.cartButton.click();
    }

    /**
     * Click the continue shopping button
     */
    public async clickContinueShopping () {
        await this.continueShopping.click();
    }
}

export default new OrderSuccessPage();