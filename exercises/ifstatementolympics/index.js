if (5 > 3) {
  console.log("is greater than");
}

var pet = "cat"
if (pet.length === 3){
  console.log("is the length");

}

var pet2 = "dog"

if (pet !== pet2) {
  console.log("not the same");
} else {console.log("is the same");

}

var person = {
  name: "Bobby",
  age: 12

}


if (person.age >= 18) {
  console.log("is allowed to go to the movie.");
} else {
  console.log("is not allowed to go to the movie.");
}

if (person.name.startsWith("B") && person.age >= 18) {
  console.log("is allowed to go to the movie.")
} else {
  console.log("is not allowed to go to the movie.");

}
//if (person.age >= 18) {
//  console.log("is allowed to go to the movie.");
//} else {

if (1 === "1") {
  console.log("strict");

} else {
  console.log("not equal at all");

}

if (1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

if ((1 <= 2 && 2 === 4) || ((3 * 4 > 10) && (5 + 10 > 10))){
  console.log("yes");
} else {
  console.log("not equal at all");
}
