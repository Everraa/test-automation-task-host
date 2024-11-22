import { Page, Locator, expect } from '@playwright/test';

export class CartSidePanel {
    readonly page: Page;
    readonly cartItem: Locator;
    readonly cartItemPrice: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItem = page.locator('[data-qa="shoppingcart-text-product"]');
        this.cartItemPrice = page.locator('[data-qa="shoppingcart-text-price"]');
        this.checkoutButton = page.locator('[data-qa="shoppingcart-btn-checkout"]');
    }

    async assertCartItem(expectedItemName: string) {
        await expect(this.cartItem).toHaveText(expectedItemName);
    }

    async assertCartItemPrice(expectedItemPrice: string) {
        await expect(this.cartItemPrice).toHaveText(expectedItemPrice);
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}