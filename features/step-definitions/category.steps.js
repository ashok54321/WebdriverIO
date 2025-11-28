import { Given, When, Then } from '@cucumber/cucumber';
import CategoryPage from '../pageobjects/category.page.js';



Given(/^User is logged in to the Ecommerce Application$/, async () => {
    console.log("*** User is logged in to the Ecommerce Application ***");
});

When(/^User navigates to the categories section$/, async () => {
    await CategoryPage.verifyCategorySection();
});

Then(/^User should see all the categories listed correctly$/, async () => {
    await CategoryPage.verifyCategoryNames();
});

Then(/^Each category should have the correct details$/, async () => {
    await CategoryPage.clickOnCategory();
    await CategoryPage.fillForm();
});
