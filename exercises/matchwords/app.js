
let str = 'Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.';
let resArray = str.split(" ");

// console.log(resArray);
// //split str into an array of substrings, split on the spaces, or " "
// //then cycle through the array to see if any items in the array match up
// //
//
// var len=resArray.length,
// var result = [],
// var obj = {};
// let matchWords = function(resArray){
//     for (var i=0; i<len; i++)
//     {
//     obj[resArray[i]]=0;
//     }
//     for (i in obj) {
//     result.push(i);
//     }
//     return result;
//
//  };
//
//  console.log(result);
//  module.exports = matchWords;

//Frank's solution
//for str, it doesn't need parentheses; if two items, then yes, e.g., (a, b)
const matching = str => {
  const newArr = str.split(" ");
  console.log(newArr);
  let temp;
  const repeated = [];
  for(let i = 0; i < newArr.length; i++) {
    temp = newArr[i];
    for(let j = i; j < newArr.length; j++) {
      if(repeated.includes(temp)) {
        break;
        //check the "includes" method Frank used, above
      }
      if(temp === newArr[j + 1]) {
        repeated.push(temp);
      }
    }
  }
  return repeated;
}
module.exports = matchWords;
