import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
const filePath = './testdata/download.xlsx';


Given(/^User is on the file upload page$/, async () => {

    await browser.url('https://rahulshettyacademy.com/upload-download-test/');
    await browser.maximizeWindow();
    await browser.pause(2000);
    await $('#fileinput').scrollIntoView();
    const title = await browser.getTitle();
   // expect(title).to.equal('File Upload & Download - Practice Page');
    //console.log("User is on the file upload page: " + title);

});

When(/^User uploads a file$/, async () => {

   
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#fileinput').setValue(remoteFilePath);
    await browser.pause(5000);
   


});

Then(/^The file should be uploaded successfully$/, async () => {
     
    console.log("File uploaded: " +filePath);

}); 