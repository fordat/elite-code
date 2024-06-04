/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s;
  }

  let result = "";
  
      // come backwards through list, because indexOf returns first encountered
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];

    // first occurrence of char
    let firstOcc = s.indexOf(char);

    // if they are equal, do nothing
    if (firstOcc === i) {
      continue;
    }

    let left = firstOcc + 1;
    let right = i - 1;
    let isPalindrome = true;

    while (left < right && isPalindrome) {
      if (s[left] === s[right]) {
        console.log(s[left], s[right]);
        left++;
        right--;
      } else {
        isPalindrome = false;
      }
    }

    if (isPalindrome) {
      let tempResult = s.substring(firstOcc, i + 1);

      console.log("bug tests: ", tempResult, result);

      if (tempResult.length > result.length) {
        console.log("here we go: ");
        console.log(tempResult);
        result = s.substring(firstOcc, i + 1);
      }
    }
  }

  if (result.length > 1) {
    return result;
  }

  if (s.length > 0) {
    return s[0];
  }

  return "";
};




var longestPalindromeRedux = function(s) {

  let result = "";

  let resultLength = 0;
 
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resultLength);
      result = s.substring(left, right+1);
      resultLength = right - left + 1;
      left--;
      right++;
    }

    // check evens too
    left = i;
    right = i+1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resultLength);
      result = s.substring(left, right+1);
      resultLength = right - left + 1;
      left--;
      right++;
    }
  }

  return result;
}

let thing = "babad";
let thing2 = "abccba";
let thing3 = "aacabdkacaa";

console.log(longestPalindromeRedux(thing));
console.log(longestPalindromeRedux(thing2));
console.log(longestPalindromeRedux(thing3));