function findMaxValue(arr) {
  // Write your code here
  // return the result

  max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

arr = [1, 4, 2, 7, 5];
console.log(findMaxValue(arr));
