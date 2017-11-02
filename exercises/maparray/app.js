// function readyToPutInTheDOM(people){
//   return people.map(function(person){
//     return person.name
//   })
// }

//Eric's advanced version
function readyToPutInTheDOM(people){
    return people.map(function(person){
        return {
            firstName: person.name.split(" ")[0],
            lastName: person.name.split(" ")[1],
            age: person.age
        }
    })
}
//Some new ES6 syntax
function readyToPutInTheDOM(people){
    return people.map(function(person){
        return `<h1>${person.name.split(" ")[0]}<h1><h2>${person.age}</h2>`;
    })
}



console.log(readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
