import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {

    public get backToCartButton () {
        return $('#username');
    }

    public get fullNameInput () {
        return $('#name');
    }

    public get addressLine1Input () {
        return $('#addressLine1');
    }

    public get addressLine2Input () {
        return $('#addressLine2');
    }

    public get cityInput () {
        return $('#city');
    }

    public get stateDropdown () {
        return $('#state');
    }

    public get zipCodeInput () {
        return $('#zipCode');
    }

    public get creditCardInput () {
        return $('#creditCard');
    }


    public get placeOrderButton () {
        return $('#place-order-btn');
    }


    /**
     * Clicks the back to cart button
     */
    public async clickBackToCartButton () {
        await this.backToCartButton.click();
    }

    /**
     * Fills the checkout form full name input
     */
    public async fillFullNameInput (name: string) {
        await this.fullNameInput.setValue(name);
    }

    /**
     * Fills the checkout form address line 1 input
     */
    public async fillAddressLine1Input (address1: string) {
        await this.addressLine1Input.setValue(address1);
    }

    /**
     * Fills the checkout form address line 2 input
     */
    public async fillAddressLine2Input (address2: string) {
        await this.addressLine2Input.setValue(address2);
    }

    /**
     * Fills the checkout form city input
     */
    public async fillCityInput (city: string) {
        await this.cityInput.setValue(city);
    }

    /**
     * Selects from the checkout form state dropdown
     */
    public async selectStateDropdown (state: string) {
        await this.stateDropdown.setValue(state);
    }

    /**
     * Fills the checkout form zip code input
     */
    public async fillZipCodeInput (zipCode: number) {
        await this.zipCodeInput.setValue(zipCode);
    }

    /**
     * Fills the checkout form credit card input
     */
    public async fillCreditCardInput (creditCard: number) {
        await this.creditCardInput.setValue(creditCard);
    }

    /**
     * Clicks the place order button
     */
    public async ClickPlaceOrderButton () {
        await this.placeOrderButton.click();
    }

    /**
     * Places an order
     */
    public async placeOrder (name: string, address1: string, address2: string, city: string, state: string, zipCode: number, creditCard: number) {
        await this.fillFullNameInput (name)
        await this.fillAddressLine1Input (address1)
        await this.fillAddressLine2Input (address2)
        await this.fillCityInput (city)    
        await this.selectStateDropdown (state)
        await this.fillZipCodeInput (zipCode)
        await this.fillCreditCardInput(creditCard);
        await this.ClickPlaceOrderButton();
    }
}

export default new CheckoutPage();