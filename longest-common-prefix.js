/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let accString = "";


  for (let i = 0; i <= 200; i++) {
    // take the first letter from the first word:
    let currLetter = strs[0][i];
    let isPrefix = true;
    console.log("currletter: ", currLetter);

    // compare it to other words in the list:
    for (let j = 1; j < strs.length; j++) {
      // if there is not a match, break from the for loop.
      if (strs[j][i] !== currLetter) {
        isPrefix = false;
        break;
      } else if (j === strs.length - 1) {
        accString += currLetter;
      }

    }

    if (!isPrefix) {
      break;
    }
  }

  return accString;    
};


var longestCommonRedux = function(strs) {

  if (strs.length === 1) {
    return strs[0];
  }

  let accString = "";

  // find every permutation(?) of current word
  for (let i = 0; i < strs[0].length; i++) {
    // take the first letter from the first word:
    let currLetter = strs[0][i];
    let isPrefix = true;
    console.log("currletter: ", currLetter);

    // compare it to other words in the list:
    for (let j = 1; j < strs.length; j++) {
      // if there is not a match, break from the for loop.
      if (strs[j][i] !== currLetter || !strs[j][i]) {
        isPrefix = false;
        break;
      } else if (j === strs.length - 1) {
        accString += currLetter;
      }

    }

    if (!isPrefix) {
      break;
    }
  }



  return accString;
}

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
console.log(longestCommonRedux(strs));