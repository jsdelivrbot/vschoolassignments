
let myRide = {
    make: "Ford",
    model: "GT40",
    year: "1966",
    color: "black",
    hasSupercharger: true
  };

 // let copy = Object.assign({}, myRide);
 // console.log(copy);

//Bob's function with Object.assign
 function copyCat(obj) {
    return Object.assign({}, myRide);
 }

copyCat(myRide);
console.log(copyCat);
// let result = cloner.shallow.copy(myRide);
// console.log(result);

// var data_copy = JSON.parse(JSON.stringify( myRide ));
// console.log(data_copy);

//Bob's solution
// function copyCat(obj){
//   const copy = {};
//   for (let key in obj) {
//     copy[prop] = obj[prop];
//   }
//   return copy;
// }
// const copy = copyCat(myRide);
// console.log(myRide.model)
// console.log(copy.model)
