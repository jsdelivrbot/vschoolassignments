//UNIT TESTING

var chai = require('chai');
var assert = chai.assert;

// var add = require('./app.js');

var palindrome = require('./app.js');

// describe("A function to check if two arguments add up to 4", function(){
//     it("Should return true if both arguments add up to 4", function(){
//         add(2,2);
//         assert.equal(add(2,2), true);
//       });
//     it("Should return false if the arguments don't add up to 4",
//       function(){
//         add(4,1);
//         assert.equal(add(4,1), false);
//
//       });
//     })
let chai = require("chai");
let assert = chai.assert;
let xxx = require("./app.js");

it("Should return a function that.....", function(){assert.equal(xxx(), xxx())});



let chai = require("chai");
let assert = chai.assert;
let xxx = require("./app.js");

it("should returna function", function(){assert.equal(xxx(),xxx())});



    });
    it('Should return true if the argument contains punctuation and is a palindrome', function(){
      assert.equal(palindrome("taco! cat!"), palindrome('tacocat'))
    });
    it("Should return true if the argument contains any non-alpha numeric characters and is a palindrome",
        function(){
          assert.equal(palindrome('t@acO ( cA*t)'), true)
        })
});
