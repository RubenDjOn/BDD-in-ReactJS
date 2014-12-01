module.exports = function () {
    this.Given(/^a calculator page$/, function (callback) {
        this.World = require('../support/world');
        callback();
    });

    this.Given(/^There are (\d+) widgets to rent$/, function (arg1, callback) {
        this.visit("/app/index.html", callback);
    });

    this.When(/^I go to the home page$/, function (callback) {
        callback();
    });

    this.Then(/^I see a list of (\d+) widgets for rent\.$/, function (arg1, callback) {
        this.browser.assert.url("http://localhost:3000/app/index.html")
        this.browser.html('body').should.equal("test");
        callback();
    });
};

