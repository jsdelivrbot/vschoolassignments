
// let stockPricesYest = [10, 7, 5, 8, 11, 9]
//
// function maxProfit(){
//   // max.Math finds highest value in array
//   let max = Math.max(stockPricesYest);
//     return max;
//
//   let min = Math.min(stockPricesYest);
// }
//
// maxProfit();
// Eric's and Neil's solution:
[0]-[1] results
[0]-[2]


let foundDiffs = [];

for (let i = 0; i < arr.length; i++){
  for (let j = i + 1; j < arr.length; j++){
    foundDiffs.push(arr[i] - arr[j])
  }
  return Math.abs(Math.min(...foundDiffs));
  // that ...spread method is awesome; check it out.
}

getMaxProfit([]);
// this didn't work.
