// let str = "Pickle Rick!";
// let res = str.split("");
// console.log(res);
//  let disEmv = ()=>{
//
//  };
//
// disEmv();

//convert string to Array, then use lodash _.pullAll method
// to yank out what we want, then put back into a string.
// Eric's solution:

function disemvowel(str){}
    arr = str.split("")
    return arr.reduce((prev, currentChar)=>{
        let c = currentChar.toLowerCase()
        if (c === "a" || c === "e" || c === "i" || c === "o"){
          prev.vowels += currentChar
        } else {
        prev.str += currentChar
      }
        return prev
    }, {str: "", vowels: ""})
  }
    console.log(disemvowel("Pickle Rick!"));

// // Kyle's solution
// function vowels(string) {
//
//     return {
//         cons: string.toLowerCase().match(/[^aeiou\s]+/g).join(""),
//         vowels: string.toLowerCase().match(/[aeiou]+/g).join("")
//     }
// }
//
// console.log(vowels("Pickle Rick!"));
