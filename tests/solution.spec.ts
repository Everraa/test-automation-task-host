import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { Navbar } from '../page-objects/components/Navbar';
import { ShopPage } from '../page-objects/ShopPage';
import { ProductPage } from '../page-objects/ProductPage';
import { CartSidePanel } from '../page-objects/components/CartSidePanel';
import { CheckoutPage } from '../page-objects/CheckoutPage';
import { ConfirmationDialog } from '../page-objects/components/ConfirmationDialog';
import { Test_data } from '../constants/constants';

test.describe('Visit muffin shop and initiate the purchase of any product', () => {
    test('Add item to the cart, checkout and complete an order', async ({ page }) => {
        let homePage: HomePage = new HomePage(page);
        let navBar: Navbar = new Navbar(page);
        let shopPage: ShopPage = new ShopPage(page);
        let productPage: ProductPage = new ProductPage(page);
        let cartSidePanel: CartSidePanel = new CartSidePanel(page);
        let checkoutPage: CheckoutPage = new CheckoutPage(page);
        let confirmationDialog: ConfirmationDialog = new ConfirmationDialog(page);

        const {
            productName,
            productPrice,
            shippingOption,
            shippingMethod,
            totalPrice,
            orderConfirmationText,
            additionalText,
            contactInformation,
        } = Test_data;

        // Visit the homepage
        await homePage.visit();
        await homePage.assertHomePageTitle()
        await homePage.assertHomePageHeading();
        
        // Click Shop link
        await navBar.clickOnShopLink();
        await shopPage.assertShopPageTitle();
        
        // Locate the product with the specific text and select it
        await shopPage.assertProductVisible(productName);
        await shopPage.selectProductByName(productName);

        // Verify correct item page is opened
        await productPage.assertProductHeading(productName);

        //Add item to a cart and go to the checkout
        await productPage.addToCart();
        await cartSidePanel.assertCartItem(productName);
        await cartSidePanel.assertCartItemPrice(productPrice);
        await cartSidePanel.proceedToCheckout();

        // Verify checkout page details
        await checkoutPage.verifyCheckoutPageTitle();
        await checkoutPage.verifyCheckoutItem(productName);

        // Choose shipping and verify totals
        await checkoutPage.selectShippingOptionAndAssert(
            shippingOption,
            productName,
            productPrice,
            shippingMethod,
            totalPrice
        );

        // Fill in shipping details and contact information
        await checkoutPage.continueToShippingDetails();
        await checkoutPage.fillContactInformation(contactInformation.email, contactInformation.fullName, contactInformation.phoneNumber, contactInformation.comment);

        // Confirm payment method and complete the order
        await checkoutPage.confirmPaymentAndPlaceOrder();

        //Thank you for your order screen
        await confirmationDialog.verifyDialogIsVisible();
        await confirmationDialog.verifyDialogContent(
            orderConfirmationText,
            additionalText
        );
    });
});