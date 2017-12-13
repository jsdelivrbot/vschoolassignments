
// const database = [
//   {
//     a: 1,
//     b: 1,
//     c: 2
//   },
//   {
//     a: 0,
//     b: 0,
//     c: 2},
//
//     {
//       a: 0,
//       b: 1,
//       c: 0
//     },
//
//     {
//       a: 1,
//       b: 2,
//       c: 2
//     }
// ];

// function filterDatabase(query, database){
//     if (Object.keys(query).length === 0){
//         return database;
//     }
//     return database.filter(obj =>{
//         for (let prop in query) {
//             if (query[prop] !== obj[prop]){
//                 return false;
//             }
//         }
//           return true;
//     });
// }
//
// console.log(filterDatabase({}, database));
// console.log(filterDatabase({dolphin: "squeak!"}));
// console.log(filterDatabase({a: 1, c: 2}, database));

const database = [
    {a: 1, b: 1, c: 2},
    {a: 0, b: 0, c: 2, dolphin: "squeak!"},
    {a: 0, b: 1, c: 0},
    {a: 1, b: 2, c: 2}
];

function filterDatabase(query, database) {
    if (!query || typeof query !== "object") {
        throw new Error("You must provide an object as a query");
    }
    if (Object.keys(query).length === 0) {
        return database;
    }
    return database.filter(entry => {
        for (let prop in query) {
            if (query[prop] !== entry[prop]) {
                return false;
            }
        }
        return true;
    });
}

console.log(filterDatabase({}, database));
console.log(filterDatabase({dolphin: "squeak!"}, database));
console.log(filterDatabase({a: 1, c: 2}, database));








//end
