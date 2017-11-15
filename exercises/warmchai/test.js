const chai = require('chai');
const assert = chai.assert;

const frontBack = require('./app.js');

describe ("It should return a new string where the first and last character have been exchanged", ()=>{
    it('Should return a string with the first and last chars switched',()=>{
      assert.isDeepEqual(frontBack("cat"), "tac");
    }
  )
})
