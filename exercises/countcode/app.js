
// var string = "Codeycodebuffalobillcodycooperationcoldcollarcadencecollation";
//
//   function countCode(string) {
//
//   var count = new RegExp("coe");
//   var res = count.test(string);
//
// }
// countCode(string);
//   // console.log(res);
//
// function myFunction () {
//   var str = "Codeycodebuffalobillcodycooperationcoldcollarcadencecollation";
//   var n = str.match(/code/i);
// console.log(n);
// }
//
// myFunction();


//Kylel's Solution
function countCode(str) {
  var count = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.slice(i, i + 2) === 'co' && str.slice(i + 3, i + 4) === 'e') {
      count++;
    }
  }

  return count;
}

countCode("cozexxcopecopzcode");

// Derek's Solution
function countCode(str) {
 return str.match(/co.e/g).length
}

countCode("cozexxcopecopzcode");
