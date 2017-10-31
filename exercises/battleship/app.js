var ask = require("readline-sync");
  console.log("Let's play Battleship!\n");

var firstCoord = ask.question("What is your first coordinate?\n");
  console.log(firstCoord);
var secondCoord = ask.question("What is your second coordinate?\n");
  console.log(secondCoord);

//
// constructor Location(row, column) {
//     this.isShip = true,
//     this.hit = false,
//     this.display = "~",
//     }
//
// var grid = [];
//   for (var i = 0; i < 10; i++){
//     grid.push([]);
//     for (var j = 0; j < 10; j++){
//       grid[i].push(0);
//     }
//   }
//
//   console.log(grid);
