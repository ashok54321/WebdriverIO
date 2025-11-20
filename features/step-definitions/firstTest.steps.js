import { Given, When, Then } from '@cucumber/cucumber';
import firstTestPage from '../pageobjects/firstTest.page.js';

Given('User is on the login page of Ecommerce Application', async ()=> {

    //browser.url('https://rahulshettyacademy.com/loginpagePractise/')
   await firstTestPage.openUrl();
   await browser.maximizeWindow();
   await browser.pause(2000);
   //const expectedTitle = await browser.getTitle()
   //await expect(expectedTitle).toEqual(actualTitle);

   await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
   console.log(await browser.getUrl());

  });

  When('User enters invalid username and password', async ()=> {

    await firstTestPage.EnterWrongCreds();

  });

  When('User clicks on the login button', async ()=> {

    await firstTestPage.ClickOnLogin();
  });

  Then('User should see an error message indicating invalid credentials', async ()=> {

    await firstTestPage.checkMessage()
});


When(/^User enters valid username and password$/, async ()=> {
   
    await firstTestPage.EnterCorrectCreds()
});

Then(/^User should be redirected to the dashboard page$/, async ()=> {

    await firstTestPage.verifyDashboard()
});
