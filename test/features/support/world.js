module.exports = function() {
    var assert = require('assert');
    var HTML5  = require('html5');
    var should = require('should');
    var Browser = require('zombie');

    this.World = function World(callback) {
        this.baseUrl = "http://localhost:3000";
        this.browser = new Browser();

        this.page = function(path){
            return this.baseUrl + path;
        };

        this.visit = function(path, callback){
            this.browser.visit( this.page(path), function(err, browser, status){
                callback(err, browser, status);
            });
        };

        // tell Cucumber we're finished and to use 'this' as the world instance
        callback();
    };
}
