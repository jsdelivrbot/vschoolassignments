
var chai = require('chai');
var assert = chai.assert;

var ipAddress = require('./app.js');

describe ("A function to check if astring is a valid IPV4 address", function(){
    it('Should return true if each set of numbers is between 0 and 255', function(){
      assert.isTrue(ipAddress('124.23.54.90'));
    });




    it('Should return false if each set of numbers is not between 0 and 255', function(){
      assert.isFalse(ipAddress('300.0.89.3'));
    });
