import Page from './page.js';
import TestData from '../../testdata/users.json';
import { assert } from 'chai';

class CategoryPage extends Page {

    get categorySection() {
        return $('//div[@class="list-group"]')
    }

    get listOfCategories() {
        return $$('//div[@class="list-group"]/a')
    }

    get categoryPageTitle() {
        return $('//div[@class="jumbotron"]/h1')
    }

    get nameField() {
        return $('(//input[@name="name"])[1]')
    }

    get emailField() {
        return $('//input[@id="exampleInputPassword1"]')
    }

    get pwdField() {
        return $('//input[@id="exampleInputPassword1"]')
    }

    get checkboxField() {
        return $('//input[@id="exampleCheck1"]')
    }

    get genderDropdown() {
        return $('//select[@id="exampleFormControlSelect1"]')
    }

    get studentRadioButton() {
        return $('//input[@id="inlineRadio1"]')
    }

    get dobField() {
        return $('//input[@name="bday"]')
    }

    get employedRadioButton() {
        return $('//input[@id="inlineRadio2"]')
    }

    get submitButton() {
        return $('//input[@class="btn btn-success"]')
    }

    get successMessage() {
        return $('//div[@class="alert alert-success alert-dismissible"]')
    }


    async verifyCategorySection() {
        const check = await this.categorySection.waitForDisplayed();
        if (check) {
            console.log("Category section is displayed");
        }
        else {
            console.log("Category section is not displayed");
        }
    }

    async verifyCategoryNames() {
        console.log("Total Categories: " + await this.listOfCategories.length);
        console.log("List of Categories:")
        for (let i=0; i< await this.listOfCategories.length; i++) {
            const catName = await this.listOfCategories[i].getText();
            console.log(catName);
            if (catName === 'Category 1' || catName === 'Category 2' || catName === 'Category 3') {
                console.log(catName + " is displayed correctly");
            }
            else {
                console.log(catName + " is NOT displayed correctly");
            }
        }
    }


    async clickOnCategory() {
        for (let i=0; i< await this.listOfCategories.length; i++) {
        console.log("Clicking on Category" + (i+1));
        await this.listOfCategories[i].click();
        await browser.pause(2000);
        console.log("Verifying Category Page Title");
        const title = await this.categoryPageTitle.getText();
        if (title === 'Protractor Tutorial') {
            console.log("Category Page Title is correct: " + title);
        }
        else {
            console.log("Category Page Title is incorrect: " + title);
        }

        await browser.back();
        await browser.pause(2000);

    }
}


    async fillForm() {
        const category1 = await $('//div[@class="list-group"]//a[1]')
        await category1.click();
         await browser.pause(2000);
         await this.nameField.setValue(TestData.formFill.name)
         await this.emailField.setValue(TestData.formFill.email)
         await this.pwdField.setValue(TestData.formFill.password)
         await this.checkboxField.click();
         await this.genderDropdown.selectByVisibleText('Female')
         await this.studentRadioButton.click()
         await this.dobField.click()
         await this.dobField.setValue(TestData.formFill.dob)
         await this.submitButton.click()
         await browser.pause(10000)
            //assert.fail();      // added chai Assertion in config file and imported   
    }



}

export default new CategoryPage();