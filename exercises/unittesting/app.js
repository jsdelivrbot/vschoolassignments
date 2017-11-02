//UNIT TESTING
// var add = function (a, b){
//   return a + b;
//
// }
// var palindrome = function(str){
  // var re = /[\W_]/g;
  // var lowRegStr = str.toLowerCase().replace(re, '');
  // var reverseStr = lowRegStr.split('').reverse().join('');
  // return reverseStr === lowRegStr;
// };


// console.log();

// var palindrome = function(str){
//   var unwantedStuff = /\W/g;
//     var lowerCaseNoSpace = str.toLowerCase().replace(unwantedStuff, '');
//     var arrReverseRejoin = lowerCaseNoSpace.split('').reverse().join('');
//     return arrReverseRejoin === lowerCaseNoSpace;
// };

var palindrome = function(str){

  var unwantedStuff = str.replace(/\W/g);
    var lowerCaseNoSpace = str.toLowerCase().replace(unwantedStuff, '');
    var arrReverseRejoin = lowerCaseNoSpace.split('').reverse().join('');
    return arrReverseRejoin === lowerCaseNoSpace;
};

console.log(palindrome("raCecar"));



module.exports = palindrome;
