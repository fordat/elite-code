/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xAsString = x.toString();

  let result = true;

  for (let i = 0; i < xAsString.length; i++) {
    if (xAsString[i] !== xAsString[xAsString.length - 1 - i]) {
      result = false;
    }
  }

  return result;    
};

// note: a better solution is to simply reverse the string and see if they are equal.

let num1 = 121;
let num2 = -121;
let num3 = 10;

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));