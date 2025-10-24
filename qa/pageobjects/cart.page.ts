import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    public get backToShopButton () {
        return $('#back-to-shop-btn');
    }

    public get startShoppingButton () {
        return $('#start-shopping-btn');
    }

    public get proceedToCheckoutButton () {
        return $('#proceed-to-checkout-btn');
    }

    /**
     * Clicks the back to shop button
     */
    public async clickBackToShopButton () {
        await this.backToShopButton.click();
    }

    /**
     * Clicks the start shopping button
     */
    public async clickStartShoppingButton () {
        await this.startShoppingButton.click();
    }

    /**
     * Clicks the checkout button
     */
    public async clickCheckoutButton () {
        await this.proceedToCheckoutButton.click();
    }
}

export default new CartPage();