const chai = require('chai');
const assert = chai.assert;

// var add = require('./app.js');

const matchWords = require('../app.js');


describe ("Show, of an array that is returned, every word that appears more than once in a phrase", () => {
    it('Should return an array of each repeated word', () => {
      assert.equal(matchWords('resArray'), []);
    });


    // it('Should return false if the', function(){
    //   assert.equal(matchWords('palindrome'), false);
    // });

  });


// try deepEqual to check if arrays are equal to each other
