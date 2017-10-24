var str1 = "Hi I'm lost"
var str2 = "and I wish I had a clue"
var result = function clue() {
  str1.concat(str2);
  }
console.log(result);

function nDexOf(){
var str = "It's my world, and welcome to it."
var nDex = str.indexOf("to");
  }
console.log(nDexOf);

var str = "Chitty Chitty Bang Bang is a blankety blank blank."
var nDexLast = str.lastIndexOf(Bang);
console.log(nDexLast);

var str = "Piggly wiggly is a scriggly miggly diggly."
var findIggl = str.match(/iggl/g);
console.log(findIggl);

var str = "Coding Dojo is the best coding boot camp in the world!"
var mod = str.replace("Coding Dojo", "VSchool");
console.log(mod);

var str = "Beat Metropolitan!"
var result = str.slice(1,7);
console.log(result);

var str = "What in the world is going on?"
var stutter = str.split(" ");
console.log(stutter);

var str = "ThIS iS HOw GaNg GiRLs WRite ThEIr NoteS"
var cleanup = str.toLowerCase();
console.log(cleanup);

var str = "why are you whispering?"
var shout = str.toUpperCase();
console.log(shout);

var str = "They materialized";
var msg = str.substr(1, 8);
console.log(msg);
