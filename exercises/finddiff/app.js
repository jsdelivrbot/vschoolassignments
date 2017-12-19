// let arrOne = [1, 2, 3];
// let arrTwo = [2, 3, 4];
// let val = []
// function diffArr(arrOne, arrTwo){
//     return arrOne.concat(arrTwo).filter(function(val){
//         if (!(arrOne.includes(val) && arrTwo.includes(val)))
//             return val;
//     })
// }
//
// diffArr (arrOne, arrTwo);
// console.log(val);

let a = [1, 2, 3, 4, 5, 6,];
let b = [1, 2, 6];
let b1 = new Set(b);
let diff = [...new Set([...a].filter(x => !b1.has(x)))];
console.log(diff);

module.exports = diff;

// Kyle's Solution
function findDiff(arr1,...arrs) {
    const combinedArgs = [].concat.apply([], arrs);
    const combined = [];
    arr1.push(...combinedArgs)
    combined.push(...arr1)
    const unique = combined.filter(item => {
        if (combined.indexOf(item) === combined.lastIndexOf(item)) {
            return item
        }
    })

    return unique
}

findDiff([4,2], [3,2], [1])
