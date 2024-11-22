import { Page, Locator, expect } from '@playwright/test';

export class ConfirmationDialog {
    readonly page: Page;
    readonly orderConfirmationDialog: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderConfirmationDialog = page.locator('[data-qa="ecommerce-modal-checkout-success-order"]');
    }

    // Verify the visibility of the confirmation dialog
    async verifyDialogIsVisible() {
        await expect(this.orderConfirmationDialog).toBeVisible();
    }

    // Verify the text content of the confirmation dialog
    async verifyDialogContent(orderConfirmationText: string, additionalText: string) {
        await expect(this.orderConfirmationDialog).toContainText(orderConfirmationText);
        await expect(this.orderConfirmationDialog).toContainText(additionalText);
    }
}