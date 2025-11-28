import { Given, When, Then } from '@cucumber/cucumber';



Given(/^User is on the Practice page$/, async () => {

await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
await browser.maximizeWindow();
await browser.pause(2000);

});

When(/^User navigates to the practice page$/, async () => {
    await expect(browser).toHaveTitle('Practice Page');
    console.log(await browser.getUrl());

});

Then(/^User should able to intract with all the elements$/, async () => {
    console.log("*** Interacting with various elements on the Practice Page ***");
    // // Interact with dynamic dropdown
    // const dropdown = await $('//input[@id="autocomplete"]');
    // await dropdown.setValue('Ind');
    // await browser.pause(2000);
    // const options = await $$('//li[@class="ui-menu-item"]/div');
    // for (opts of options) {
    //     const name = await opts.getText();
    //     if (name === "India") {
    //         await opts.click();
    //         await browser.pause(2000);
    //         break;
    //     }
    // }


    // // Interact with static dropdown
    // const staticDropdown = await $('//select[@id="dropdown-class-example"]')
    // staticDropdown.selectByVisibleText('Option3');
    // await browser.pause(2000);
    // staticDropdown.selectByIndex(1)
    // await browser.pause(2000);
    // staticDropdown.selectByAttribute('value', 'option2')
    // await browser.pause(2000);

    // // Interact with checkboxes
    // const checkBoxes = await $$('//div[@id="checkbox-example"]//input')
    // for (check of checkBoxes) {
    //     const value = await check.getAttribute('value')
    //     console.log(value);
    //     if (value === 'option2') {
    //         await check.click();
    //         await browser.pause(2000);
    //     }

    //     if (value === 'option3') {
    //         await check.click();
    //         await browser.pause(2000);
    //     }
    // }


    //  // Interact with child window
    // const parentWindow = await browser.getWindowHandle();
    // console.log("Parent Window ID: " + parentWindow);
    // const openWindowBtn = await $('//button[@id="openwindow"]')
    // await openWindowBtn.click();
    // const childWindow = await browser.getWindowHandles();
    // console.log("All Window IDs: " + childWindow);
    // await browser.switchToWindow(childWindow[1])
    // console.log("Child Window Title: " + await browser.getTitle());
    // await browser.pause(2000);
    // await browser.switchToWindow(parentWindow);
    // console.log("Parent Window Title: " + await browser.getTitle());
    // await browser.pause(2000);


    // // Interact with new tab
    // const openTabBtn = await $('//a[@id="opentab"]')
    // await openTabBtn.click();
    // const tabs = await browser.getWindowHandles();
    // console.log("All Tab IDs: " + tabs);
    // await browser.switchToWindow(tabs[1])
    // console.log("New Tab Title: " + await browser.getTitle());
    //  await browser.pause(3000);
    // await browser.switchToWindow(parentWindow);
    // console.log("Parent Window Title: " + await browser.getTitle());
    // await browser.pause(2000);

    

//    // Interact with Alerts
//   const alertBtn = await $('//input[@id="alertbtn"]')
     const namefield = await $('//input[@id="name"]')
     await namefield.scrollIntoView()
//     await browser.pause(2000)
//     await alertBtn.click();
//     var flag = await browser.isAlertOpen();
//     console.log(flag) 
//     const alertText = browser.getAlertText()
//     console.log(alertText)

//    // await browser.pause(3000)
//    if (flag) {
//     await browser.acceptAlert();
//    }


    // await browser.pause(2000)
    // const confirmBtn = await $('//input[@id="confirmbtn"]')
    // await confirmBtn.click()
    // const Msg = await browser.getAlertText()
    // console.log(Msg)
    // await browser.pause(2000)
    // const flag1 = await browser.isAlertOpen()
    // if (flag1) {
    //     await browser.acceptAlert()
    //     await browser.pause(2000)
    // }


    //


});
