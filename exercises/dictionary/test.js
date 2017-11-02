//UNIT TESTING

var chai = require('chai');
var assert = chai.assert;

var myDict = require('./app.js').myDict;
var lookUp = require('./app.js').lookUp;

describe("A dictionary to add and look up words", function(){
    it("Should store the word when added", function(){
      myDict('corporation', 'a big business');
      assert.equal(lookUp('corporation'), 'a big business');
    })
});
  it("Should return null when we look up a word not present", function(){
    assert.equal(myDict(), null);
  });
