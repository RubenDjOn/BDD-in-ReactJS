/**
 * Cucumber's world
 */
module.exports = function() {
    var assert = require('assert');
    var HTML5  = require('html5');
    var should = require('should');
    var Browser = require('zombie');
    var CalculatorPage = require('../page_object/calculator_page');

    this.World = function World(callback) {
        this.baseUrl = "http://localhost:3000";
        this.browser = new Browser({site:this.baseUrl});

        // page objects
        this.calculatorPage = new CalculatorPage(this.browser);

        // tell Cucumber we're finished and to use 'this' as the world instance
        callback();
    };
}
