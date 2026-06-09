function main(str) {
  // Write your code here
  // return the count

  let count = 0
  vowlesArray = ['a', 'e', 'i', 'o', 'u']

  for (let i=0; i < str.length; i++) {
    if(vowlesArray.includes(str[i])) {
        count += 1
    }
  }

  return count

}

console.log(main("Hello"));