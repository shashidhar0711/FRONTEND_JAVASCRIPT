// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.
function reverseWords(sentence) {
    let words = sentence.split(" ") // string to array
    console.log(words)

    let copyArray = []

    while(words.length > 0) {
        copyArray.push(words.pop())
    }

    return copyArray.join(" ")  // array to string
}
  
  console.log(reverseWords("world")); // "world Hello"
  console.log(reverseWords("JavaScript is fun")); // "fun is JavaScript"
  console.log(reverseWords('Scaler Academy'))