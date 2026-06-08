// Array

let data = [1, 'scaler', null, true, undefined]

console.log(data)
console.log(data.length)


// methods and properties fo an array

console.log(data[1])


data.push(100) // It will add at the end
// data.pop()   // Remove at the end
// data.unshift('param')  // Add at the begining
// data.shift()  // Remove at begining

console.log(data)

// splice

let arr = [10, 20, 30, 40]

let subArr = arr.slice(1, 4)

console.log(arr)
console.log(subArr)