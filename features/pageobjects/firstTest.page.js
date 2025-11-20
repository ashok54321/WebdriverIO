import Page from './page.js';
const testData = require('../../testdata/users.json');
class FirstTestPage extends Page{

//locators --LoginPage

get username() {
    return $('//input[@id="username"]')
}

get password() {
    return $('//input[@id="password"]')
}

get termsCheckbox() {
    return $('//input[@id="terms"]')
}

get signInButton() {
    return $('//input[@id="signInBtn"]')
}

get AdminType() {
    return $("//div[@class='form-check-inline']//label[1]//span[2]")
}

get UserType() {
    return $("//div[@class='form-check-inline']//label[2]//span[2]")
}

get termsAndConditionsLink() {
    return $('//label[@class="text-info"]//a')
}

get errorMessage() {
    return $('//div[@class="alert alert-danger col-md-12"]')
}

get dashoardHeader() {
    return $('//div[@class="container"]/nav/a')
}






async openUrl() {
    return super.open('loginpagePractise/')
}

async EnterWrongCreds() {
    await this.username.setValue(testData.invalidUser.username)
    await this.password.setValue(testData.invalidUser.password)
    await this.termsCheckbox.click()
    //await this.signInButton.click()
    //await browser.pause(3000);
}

async ClickOnLogin() {
    await this.signInButton.click()
    await browser.pause(3000);
}

async checkMessage() {
    const errorMessage = await this.errorMessage.getText();
    console.log(errorMessage)
    await expect(errorMessage).toContain('Incorrect username/password.');
}

async EnterCorrectCreds() {
    await this.username.setValue(testData.validUser.username)
    await this.password.setValue(testData.validUser.password)
    await this.termsCheckbox.click()

}

async verifyDashboard() {
    await this.dashoardHeader.waitForDisplayed();
    const headerText = await this.dashoardHeader.getText();
    console.log("Dashboard Header is: " + headerText);
    await expect(headerText).toEqual('ProtoCommerce')

    // Generate a timestamp string
    //const timestamp = new Date().toISOString().replace(/:/g, '-');
    //const screenshotName = `screenshot-${timestamp}.png`;

    // Take the screenshot using the dynamically generated filename
    //await browser.saveScreenshot(`./screenshots/${screenshotName}`);
    //await browser.saveScreenshot('./screenshots/dashboard2.png');
}









}
export default new FirstTestPage();