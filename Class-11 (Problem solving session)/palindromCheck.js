function isPalindrome(str) {
  // Write your code here
  // return the result

  // change to lower case and remove non-alpha character
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  originString = str;
  palindromString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    palindromString += str[i];
  }

  if (originString === palindromString) {
    return true;
    
  } else {
    return false;
  }
}

console.log(isPalindrome("MadAm"));
