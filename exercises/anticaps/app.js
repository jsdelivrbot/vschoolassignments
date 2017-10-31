//antiCaps("Hello") {
//I need an if statement to see if letter is in caps. Maybe a for loop
//to go through each letter in a string to check it for if caps === true
//}

// function isCaps(letter) {
//   return letter === letter.toUpperCase();
//
// }
// var A = "hello";
// function myFunction() {
// //  var A = document.getElementById('input').value;
//   var output = '';
//   for (var i = 0, len = A.length; i < len; i++) {
//     var letter = A[i];
//     if (letter == letter.toLowerCase()) {
//       // The character is lowercase
//       output = output + letter.toUpperCase();
//     } else {
//       // The character is uppercase
//       output = output + letter.toLowerCase();
//     }
//   }

//LUke's solution

function antiCaps(str){
  var newString = [];
  var splitWord = str.split('');
  for (var i = 0; i < str.length; i++){
    if (splitWord[i] === splitWord[i].toUpperCase()){
      newString.push(splitWord[i].toLowerCase());
    } else if (splitWord[i] === splitWord[i].toLowerCase()){
      newString.push(splitWord[i].toUpperCase());
    }
  }return newString.join('')
}
antiCaps('kILL mE');


//Frank's solution
function antiCaps(str) {
  var newString = "";
  for(var i = 0; i < str.length; i++) {
    if(isCaps(str[i])) {
      newString += str[i].toLowerCase();
    } else {
      newString += str[i].toUpperCase();
    }
  }
  console.log(newString);
}

//Marcus's solution
function isCaps(letter) {
  return letter === letter.toUpperCase();
}
//
// function antiCaps(str) {
//   var newString = "";
//   for(var i = 0; i < str.length; i++) {
//     isCaps(str[i]) ? newString += str[i].toLowerCase() :newString += str[i].toUpperCase(); //Ternary
//
//     // if(isCaps(str[i])) {
//     //   newString += str[i].toLowerCase();
//     // } else {
//     //   newString += str[i].toUpperCase();
//     // }
//   }
//   console.log(newString);
// }
//
// antiCaps("Hello");
//
// //andrew's solution
// function antiCaps(str) {
//   var splitStr = str.split('');
//   return splitStr.map(function(x){
//     if(x === x.toUpperCase()) {
//       return x.toLowerCase();
//     } else if (x === x.toLowerCase()) {
//       return x.toUpperCase();
//     }
//   });
// }
// antiCaps('aPPles');

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

function antiCaps(str) {
  var splitStr = str.split('');
  return splitStr.map(function(x) {return isCaps(x) ? x.toLowerCase(): x.toUpperCase();}).join('');
}

antiCaps('aPPleS');
