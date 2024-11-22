import {Locator, Page} from '@playwright/test';

export class Navbar {
    readonly page: Page;
    readonly shopLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shopLink = page.getByRole('link', { name: 'Shop' });
    }

    async clickOnShopLink() {
        await this.shopLink.click();
    }
}