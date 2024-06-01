/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//   let result = "";
//   let newNum;

//   // M calculation

//   mCount = Math.floor(num / 1000);
//   mRemainder = num % 1000;

//   for (let i = 0; i < mCount; i++) {
//     result += "M";
//   }
//   newNum = num - mCount * 1000;

//   if (mRemainder > 900) {
//     result = result.slice(0, result.length - 1) + "CM";
//     newNum = newNum - 900;
//   }

//   console.log("remaining num: ." , newNum);
  


//   console.log("mcount: ", mCount, "\n mremainder: ", mRemainder);

//   console.log("result: ", result);

//   return num;

// };

var intToRoman = function(num) {
  let ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let thousands = ["M", "MM", "MMM"];

  let mCount = Math.floor(num / 1000);
  let cCount = Math.floor((num % 1000) / 100);
  let xCount = Math.floor((num % 100) / 10);
  let iCount = num % 10;

  let thousandsPlace = thousands[mCount - 1] ? thousands[mCount - 1] : ""
  let hundredsPlace = hundreds[cCount - 1] ? hundreds[cCount - 1] : ""
  let tensPlace = tens[xCount - 1] ? tens[xCount - 1] : ""
  let onesPlace = ones[iCount - 1] ? ones[iCount - 1] : ""

  const numeral = thousandsPlace + hundredsPlace + tensPlace + onesPlace;

  return numeral;
}

console.log(intToRoman(3749));