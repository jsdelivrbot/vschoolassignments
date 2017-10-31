// var ask = require("readline-sync");
// console.log("Hello! Let's play a game called Escape the Room!\n");
// var name = ask.question("What is your name?\n");
// console.log("Hey " + name + "!" + " " + "Let's go over your options. Option 1 - You can put your hand in the hole.  Option 2 - You can find the key. Option 3 - Or, open the door.  But you can't open the door without the key, and you die if you put your hand in the hole.\n");
// var optionArray = ["Hand in Hole", "Find the Key", "Open the Door"];
// var option = ask.question("Which option do you choose?\n");
// var keyHeld = true;



var readline = require('readline-sync');
var options = ["Put hand in the hole.", "Find the key.", "Open the door."];
var keyHeld = false;

    while (playerInput != 0){
        var playerInput = readline.keyInSelect(options, 'What would you like to do?');
        if(playerInput === 1){
        keyHeld = true;
        console.log("You pick up the key.");
      } else if(playerInput === 2){
        if (keyHeld === true){
        console.log("You opened the door and escaped!");
        break;
      } else{
        console.log('The door is locked, idiot.')
      }
        }else{
          console.log('You died.');
        }
    }
