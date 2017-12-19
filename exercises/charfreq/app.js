
//One solution
function getFrequency(str){
    return str.split("").reduce((prev, curr) =>{
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
};
console.log(getFrequency("aaabbbcdddddee"));


// Eric's testing solution
// console.log(equals(func(), "output string"))
//
// function func(){
//     return "output string"
// }
//
// function equals(output, expectedOutput){
//     return output === expectedOutput
// }
//This is incomplete, see test.js
