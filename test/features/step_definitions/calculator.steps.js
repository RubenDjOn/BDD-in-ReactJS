module.exports = function () {
    this.Given(/^a calculator/, function (callback) {
        this.World = require('../support/world');
        this.visit("/app/calculator.html", callback);
    });

    this.Given(/^I have entered a number (\d+) into the calculator$/, function (number, callback) {
        this.browser.fill("#txtNumber1", number);
        callback();
    });

    this.Given(/^I have entered another number (\d+) into the calculator$/, function (number, callback) {
        this.browser.fill("#txtNumber2", number);
        callback();
    });

    this.When(/^I press add$/, function (callback) {
        this.browser.pressButton("#btnAdd", callback);
    });

    this.Then(/^the result should be (\d+) on the screen$/, function (sum, callback) {
        this.browser.assert.evaluate(this.browser.field('#txtSum').value, sum);
        callback();
    });
}