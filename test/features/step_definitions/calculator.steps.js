/**
 * Step definition for calculator feature
 */
module.exports = function () {
    this.Given(/^a calculator/, function (callback) {
        this.World = require('../support/world');
        this.calculatorPage.visit("/app/calculator.html", callback);
    });

    this.Given(/^I have entered a number (\d+) into the calculator$/, function (number, callback) {
        this.calculatorPage.enterNumber1(number, callback);
    });

    this.Given(/^I have entered another number (\d+) into the calculator$/, function (number, callback) {
        this.calculatorPage.enterNumber2(number, callback);
    });

    this.When(/^I press add$/, function (callback) {
        this.calculatorPage.pressAdd(callback);
    });

    this.Then(/^the result should be (\d+) on the screen$/, function (sum, callback) {
        this.calculatorPage.resultShouldBe(sum, callback);
    });
}