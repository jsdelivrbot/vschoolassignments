var ask = require("readline-sync");
console.log("Hello! My name is HAL.  Help me get to know you!\n");
var name = ask.question("What is your name?\n");
console.log("Hey " + name + "!");
var favColor = ask.question("What's your favorite color?\n");
console.log("Well, " + favColor + " is the color I painted the pod bay doors.\n");
var whatCollege = ask.question("What college did you go to?\n");
console.log(whatCollege.toUpperCase() + "!" + " Amazing!  You must be a genius.\n");
var lengthLast = ask.question("What's your last name?\n");
console.log("Your last name has " + lengthLast.length + " letters in it. I also see your full name is" + " " + name.concat(" ", lengthLast) + ".\n");
var lastHalf = ask.question("Tell me the story of your life, in 100 words or less.\n");
console.log("I'm sorry... I dozed off during that first part.  All I heard was" + "... " + lastHalf.substr(11, 1000) + "....\n");
console.log("I think you said..." + " " + lastHalf + "...\n");

//This last part doesn't work the way I wanted to.
//console.log("How about at" + " " + lastHalf.indexOf("I"));
