import {expect, Locator, Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h1');
    }

    async visit() {
        await this.page.goto('/');
    }

    async assertHomePageHeading() {
        await expect(this.heading).toHaveText('Fresh Muffins');
    }

    async assertHomePageTitle() {
        await expect(this.page).toHaveTitle('Freshly Baked Muffins - Cozy Online Muffin Shop | Muffin');
    }
}