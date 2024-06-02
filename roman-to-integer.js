/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let dictionary = {}

  dictionary["I"] = 1;
  dictionary["II"] = 2;
  dictionary["III"] = 3;
  dictionary["IV"] = 4;
  dictionary["V"] = 5;
  dictionary["VI"] = 6;
  dictionary["VII"] = 7;
  dictionary["VIII"] = 8;
  dictionary["IX"] = 9;

  dictionary["X"] = 10;
  dictionary["XX"] = 20;
  dictionary["XXX"] = 30;
  dictionary["XL"] = 40;
  dictionary["L"] = 50;
  dictionary["LX"] = 60;
  dictionary["LXX"] = 70;
  dictionary["LXXX"] = 80;
  dictionary["XC"] = 90;

  dictionary["C"] = 100;
  dictionary["CC"] = 200;
  dictionary["CCC"] = 300;
  dictionary["CD"] = 400;
  dictionary["D"] = 500;
  dictionary["DC"] = 600;
  dictionary["DCC"] = 700;
  dictionary["DCCC"] = 800;
  dictionary["CM"] = 900;

  dictionary["M"] = 1000;
  dictionary["MM"] = 2000;
  dictionary["MMM"] = 3000;

  let numeralAcc = "";
  let intValue = 0;

  for (let i = 0; i < s.length; i++) {
    numeralAcc += s[i];
    let nextInLine = numeralAcc + s[i + 1];

    if (dictionary[numeralAcc] && !dictionary[nextInLine]) {
      intValue += dictionary[numeralAcc];
      numeralAcc = "";
    }
  }

  return intValue;
};


let numeral = "III";
let numeral2 = "CCIV";

console.log(romanToInt(numeral));
console.log(romanToInt(numeral2));