import {expect, Locator, Page} from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productHeading: Locator;
    readonly addToCartButton: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productHeading = page.locator('[data-qa="builder-product-section-title"]');
        this.addToCartButton = page.locator('[data-qa="productsection-btn-addtobag"]');
    }

    async assertProductHeading(expectedHeading: string) {
        await expect(this.productHeading).toHaveText(expectedHeading);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}