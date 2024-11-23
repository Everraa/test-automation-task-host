import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutTitle: string = 'Checkout';
    readonly checkoutItemName: Locator;
    readonly shippingOption: Locator;
    readonly shippingOptionsDropdown: Locator;
    readonly shippingAddress: (name: string) => Locator;
    readonly shippingItemName: Locator;
    readonly shippingItemPrice: Locator;
    readonly shippingMethod: Locator;
    readonly totalPrice: Locator;
    readonly continueToShippingDetailsButton: Locator;
    readonly emailInput: Locator;
    readonly nameInput: Locator;
    readonly phoneInput: Locator;
    readonly customFieldInput: Locator;
    readonly continueToPaymentButton: Locator;
    readonly paymentMethods: Locator;
    readonly placeOrderButton: Locator;
    readonly shippingDestinationSelect: Locator;
    readonly shippingMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutItemName = page.locator('[data-qa="checkout-cartsummary-itemname-freshlybakedmuffinsdaily"]');
        this.shippingOption = page.locator('input#input-17[type="radio"]')
        this.shippingOptionsDropdown = page.locator('[data-qa="checkout-shippingoptions-parcelselect"]');
        this.shippingAddress = (name: string) => page.getByRole('option', { name });
        this.shippingItemName = page.locator('[data-qa="checkout-cartsummary-itemname-freshlybakedmuffinsdaily"]');
        this.shippingItemPrice = page.locator('[data-qa="checkout-cartsummary-itemprice-freshlybakedmuffinsdaily"]');
        this.shippingMethod = page.locator('[data-qa="checkout-cartsummary-shippingprice-name"]');
        this.totalPrice = page.locator('[data-qa="checkout-cartsummary-totalprice-value"]');
        this.continueToShippingDetailsButton = page.locator('[data-qa="checkout-shippingdetails-continue"]');
        this.emailInput = page.locator('input#email[type="text"]');
        this.nameInput = page.locator('input#name[type="text"]');
        this.phoneInput = page.locator('input#phone[type="text"]');
        this.customFieldInput = page.locator('input#customFieldValue[type="text"]');
        this.continueToPaymentButton = page.locator('[data-qa="checkout-contactinformation-continue"]');
        this.paymentMethods = page.locator('[data-qa="checkout-paymentmethods-manual"]');
        this.placeOrderButton = page.locator('[data-qa="checkout-paymentmethods-placeorder"]');
        this.shippingDestinationSelect = page.locator('[data-qa="checkout-shippingdestination-select"]');
        this.shippingMenu = page.locator('#v-menu-8');
    }

    async verifyCheckoutPageTitle() {
        await expect(this.page).toHaveTitle(this.checkoutTitle);
    }

    async verifyCheckoutItem(productName: string) {
        await expect(this.checkoutItemName).toHaveText(productName);
    }

    async selectShippingDestination(country: string) {
        await this.shippingDestinationSelect.click();
        await this.shippingMenu.getByText(country).click();
    }

    async selectShippingOptionAndAssert(
        shippingAddress: string,
        productName: string,
        productPrice: string,
        shippingMethod: string,
        totalPrice: string
    ) {
        await this.shippingOption.check();
        await this.shippingOptionsDropdown.click();
        await this.shippingAddress(shippingAddress).click();
        await expect(this.shippingItemName).toHaveText(productName);
        await expect(this.shippingItemPrice).toHaveText(productPrice);
        await expect(this.shippingMethod).toHaveText(shippingMethod);
        await expect(this.totalPrice).toHaveText(totalPrice);
    }

    async continueToShippingDetails() {
        await this.continueToShippingDetailsButton.click();
    }

    async fillContactInformation(email: string, name: string, phone: string, comment: string) {
        await this.emailInput.fill(email);
        await this.nameInput.fill(name);
        await this.phoneInput.fill(phone);
        await this.customFieldInput.fill(comment);
        await this.continueToPaymentButton.click();
    }

    async confirmPaymentAndPlaceOrder() {
        await expect(this.paymentMethods).toBeVisible();
        await this.placeOrderButton.click();
    }
}