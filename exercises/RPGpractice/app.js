

// Let the user choose an item from a list:

// var readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

var ask = require('readline-sync');
// var animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"];
// var index = readlineSync.keyInSelect(animals, "Which animal?");
// console.log("Ok, " + animals[index] + " goes to your room.");

var directions = ["North", "South", "East", "West"];
var indexDirections = ask.keyInSelect(directions, "Which way do you want to go?\n");
// var indexDirections = readline.keyInSelect(directions, "Which way do you want to go?\n");
console.log("Ok, we are going " + directions[indexDirections]);
