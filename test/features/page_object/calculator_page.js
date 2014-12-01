/**
 * Calculator Page Object
 */
function CalculatorPage(browser) {
   this.browser = browser;

   this.visit = function (path, callback) {
       this.browser.visit(path, function (err, browser, status) {
           callback(err, browser, status);
       });
   };

    this.enterNumber1 = function (number, callback) {
        this.browser.fill("#txtNumber1", number);
        callback();
    };

    this.enterNumber2 = function (number, callback) {
        this.browser.fill("#txtNumber2", number);
        callback();
    };

    this.pressAdd = function (callback) {
        this.browser.pressButton("#btnAdd", callback);
    }

    this.resultShouldBe = function(sum, callback) {
        this.browser.assert.evaluate(this.browser.field('#txtSum').value, sum);
        callback();
    }
}

module.exports = CalculatorPage;
