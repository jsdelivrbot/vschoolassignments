
//Ask user for name and give greeting using readline-sync.
var ask = require ("readline-sync");

////PLAYER CONSTRUCTOR//////
function Character (name, inventory){
    this.playerName = name;
    this.health = 100;
    this.items = inventory;
  }
////ENEMY CONSTRUCTOR/////
function Monster (name, health, inventory){
  this.monsterName = name;
  this.monsterHealth = health;
  this.items = inventory;
}


////GREETING/////
console.log("Hello! Let's play Colossal RPG.  Help me get to know you!\n");
var name = ask.question("What's your name?\n");
console.log("Hey " + name + "!");

const player = new Character(name, []);

// const ghost = new Monster ('Casper',25 )
// const vampire = new Monster ('dracula', 15)
// player.items.push("spear");
// console.log(player.items);

// player.health -= 10;
// console.log(player.health);

///WALKING/////
while(player.health > 0){
  action() asking if you want to walk or print;
  if (action === 'w'{ console.log("And we're walking."){
    var random = randomnumber between 1 and 3;
    if (random > 1){
      console.log("nothing happens, you keep walking");
    } else if (random <= 1){
      fight()
    }
  }

    //  if(Math.random >= 0.25){
    //       fight();} else {
    //        console.log("You didn't run into a monster.");
    //     }

   } else if(action === 'print') {
     console.log(name, health, inventory);
   } else {
     console.log("That isn't an option.  Press 'w' or 'print.'\n")
   }
}
//
//
// // var health = 100;
// // var inventory = ["gun", "knife"];
//
//
//
// var directions = ["North", "South", "East", "West"];
// var indexDirections = ask.keyInSelect(directions, "Which way do you want to go?\n");
// console.log("Ok, we are going " + directions[indexDirections]);
//
// var action = ask.question("Do you want to walk? Press 'w' if you do. Type in 'print' if you want to print your status\n");
//
// var input = ask.keyIn('w');
//
// var attackChance = function(){
//     Math.floor(Math.random() + 1)
//   }


// function walk(){
//     if (action === 'w'{ console.log("And we're walking.")
//        };
//       //  if(Math.random >= 0.25){
//       //       fight();} else {
//       //        console.log("You didn't run into a monster.");
//       //     }
//
//      } else if(action === 'print') {
//        console.log(name, health, inventory);
//      } else {
//        console.log("That isn't an option.  Press 'w' or 'print.'\n")
//      }
//    };
// //
function fight(){
  var random
  if random === 1
  fight vampire
  if random === 2
  fight casper
  if random === 3
  fight other
  console.log("Under construction");
};
//
//
// var options = [];
//
// var xxx = ask.question("What do you want to do?\n");
//
// function walk(){
// //ask user to push "w" to walk
//   //if (user pushed w){
//   if (1 in 4){
//     fight();
//   } else {
//     //tell user they didn't run into a monster
//     //IMPORTANT. DO NOT CALL WALK()
//     } else {
//     //tell user what's in their inventory, and their health.
//     }
//   };
//
// function run() {
//   if(1 in 2){
//     //tell user that they successfully got away and can
//     //****IMPORTANT. DO NOT CALL WALK()***
//   } else {
//       //tell user they were not able to run
//       //****IMPORTANT. DO NOT CALL FIGHT()***
//   }
// };
//
// function fight(){
//
// };
//
// function attackEnemy(){
//
// };
//
// function enemyAttack(){
//
// };
//
// function die(){
//
// };
//
// function enemyDie(){
//
// };
//
// function characterCreation(){
//
// };
//
// function enemyCreation(){
//
// };
