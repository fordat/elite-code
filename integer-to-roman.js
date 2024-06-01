/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = "";
  let newNum;

  // M calculation

  mCount = Math.floor(num / 1000);
  mRemainder = num % 1000;

  for (let i = 0; i < mCount; i++) {
    result += "M";
  }
  newNum = num - mCount * 1000;

  if (mRemainder > 900) {
    result = result.slice(0, result.length - 1) + "CM";
    newNum = newNum - 900;
  }

  console.log("remaining num: ." , newNum);
  


  console.log("mcount: ", mCount, "\n mremainder: ", mRemainder);

  console.log("result: ", result);

  return num;

};

console.log(intToRoman(3915));