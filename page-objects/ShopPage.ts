import {expect, Locator, Page} from '@playwright/test';

export class ShopPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly productListSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h1');
        this.productListSection = page.locator('.product-list');
    }

    async assertHomePageHeading() {
        await expect(this.heading).toHaveText('Fresh Muffins');
    }

    async assertShopPageTitle() {
        await expect(this.page).toHaveTitle('Freshly Baked Muffins Delivered to Your Doorstep | Muffin');
    }

    async assertProductVisible(productName: string) {
        const specificProduct = this.page.locator(`[data-qa="product-list-section-item-title"]:has-text("${productName}")`);
        await expect(specificProduct).toBeVisible();
    }

    async selectProductByName(productName: string) {
        const specificProduct = this.page.locator(`[data-qa="product-list-section-item-title"]:has-text("${productName}")`);
        await specificProduct.click();
    }
}