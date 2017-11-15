


//Josh's solution
var frontBack = function(str) {
var newString = str.split("");
var char = newString.shift();
var lastChar = newString.pop();

var final = lastChar.toString() + newString.toString() + char.toString();
  return final


}
frontBack("cat");

module.exports = frontBack;


//Derek's solution
// let str = "cat";
// function frontBack(str){
// newStr = str.split("");
// newStr[0] = newStr[str.length];
//
//
// newStr[0] = newStr[str.length];
// return newStr.join('');
// }
// frontBack('cat');
