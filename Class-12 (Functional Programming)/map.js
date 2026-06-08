let nums = [1, 2, 3, 4, 5];

// // write a function to calculate
// // squares of these values , new array should be there
// function squares(arr){
//     let result = []

//     for(let i=0 ; i<arr.length ; i++){
//         result.push(arr[i]*arr[i])
//     }

//     return result
// }

// const squraesArr = squares(nums)
// console.log(squraesArr)

// let squareArr = nums.map(function (a) {
//   return a * a;
// });

// map method
function square(val) {
    return val*val
}

let squareArray = nums.map(num=>square(num))

console.log(squareArray);
// -------------------------
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 88.12;

// // use map method and show the amounts in USD format

function calculateInrToUsd(money) {
    return (money/inrtToUsd).toFixed(2)
}

let usdArray = transactions.map(value=>calculateInrToUsd(value))

console.log(usdArray)




