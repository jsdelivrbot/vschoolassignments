var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

var myIndex = fruit.indexOf("orange");
console.log(myIndex);

var push = fruit.push([1]);
console.log(push);

var vegLength = vegetables.length;
console.log(vegLength);

var addFour = vegetables.push([3]);
console.log(addFour);

var food = fruit.concat(vegetables);
console.log(food);

var stepEight = food.splice(4, 2);
console.log(stepEight);

var reverseArray = food.reverse();
console.log(reverseArray);

var stepTen = food.join(" ");
console.log(food);

//console.log("fruit: " fruit);
//console.log("vegetables: " vegetables);
