

try {
  var myName = "John Doe";
  console.log(myName);

}catch(e){
  console.log(e.message);
  console.log(e.name);
}

// try {

function movieCheck(age) {
  if(age < 0) {
    throw "Error cannot be less than 0";
  } else if(age <= 12) {
    console.log("You can see PG movies");
  } else if(age >= 13 && age < 18) {
    console.log("You can see PG-13 movies");
  } else if(age >= 18) {
    console.log("You can see R rated movies");
  }

movieCheck(6);
// }


//  }catch(e){
//    if(e instanceof ReferenceError){
//     console.log("This was a reference error");
//    }else if (e instanceof TypeError){
//      console.log(e);
//    }else {
//      console.log("It was neither a TypeError or ReferenceError");
//   }
//
//    console.log(e.message);
//    console.log(e.name);
// }





// catch (err) {
//   console.log(err);
//
// }
//
// catch(e){
//   if (e instanceofReference Error){
//     console.log("This was a reference error");
//   } else if (e instanceof TypeError){
//     console.log(e);
//   }else {
//     console.log("It was neither a TypeError or ReferenceError");
//   }
// }
