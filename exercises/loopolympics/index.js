
var num = 0;
while (num <= 8){
   num++;
    console.log(num);
  }

var i;
for (var i = 0; i < 10; i++) {
    console.log(i);
  }

 var i;
 for (var i = 9; i > 0; i--) {
     console.log(i);
  }

var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);

//  }

var num = [];
for (var i = 0; i < 10; i++){
  num.push(i);
  }
console.log(num);



  var num2 = [];
  for (var i = 0; i < 101; i += 2) {
    num2.push(i);
    }
  console.log(num2);

var newFruit = [];
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i <fruit.length; i += 2) {
  newFruit.push(fruit[i]);
  }
  console.log(newFruit);
