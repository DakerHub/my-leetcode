/**
 * @description
 * 整数转罗马数字，余数法
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const splits = [
    { int: 1000, roman: "M" },
    { int: 500, roman: "D" },
    { int: 100, roman: "C" },
    { int: 50, roman: "L" },
    { int: 10, roman: "X" },
    { int: 5, roman: "V" },
    { int: 1, roman: "I" }
  ];

  const abbreviation = [
    ["DCCCC", "CM"],
    ["CCCC", "CD"],
    ["LXXXX", "XC"],
    ["XXXX", "XL"],
    ["VIIII", "IX"],
    ["IIII", "IV"]
  ];

  let rest = num;
  let roman = "";
  splits.forEach(s => {
    for (let i = 0; i < Math.floor(rest / s.int); i++) {
      roman += s.roman;
    }
    rest = rest % s.int;
  });

  abbreviation.forEach(a => {
    roman = roman.replace(new RegExp(a[0], "g"), a[1]);
  });

  return roman;
};

/**
 * @description
 * 整数转罗马数字，贪心算法
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function(num) {
  const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let roman = "";
  while (num !== 0) {
    for (let i = 0; i < 13; i++) {
      if (num >= ints[i]) {
        roman += romans[i];
        num -= ints[i];
        break;
      }
    }
  }

  return roman;
};

/**
 * @description
 * 整数转罗马数字，贪心算法
 * @param {number} num
 * @return {string}
 */
var intToRoman3 = function(num) {
  let res = "";
  while (num !== 0) {
    if (num >= 1000) {
      res += "M";
      num -= 1000;
    } else if (num >= 900) {
      res += "CM";
      num -= 900;
    } else if (num >= 500) {
      res += "D";
      num -= 500;
    } else if (num >= 400) {
      res += "CD";
      num -= 400;
    } else if (num >= 100) {
      res += "C";
      num -= 100;
    } else if (num >= 90) {
      res += "XC";
      num -= 90;
    } else if (num >= 50) {
      res += "L";
      num -= 50;
    } else if (num >= 40) {
      res += "XL";
      num -= 40;
    } else if (num >= 10) {
      res += "X";
      num -= 10;
    } else if (num >= 9) {
      res += "IX";
      num -= 9;
    } else if (num >= 5) {
      res += "V";
      num -= 5;
    } else if (num >= 4) {
      res += "IV";
      num -= 4;
    } else {
      res += "I";
      num -= 1;
    }
  }
  return res;
};

module.exports = { intToRoman, intToRoman2, intToRoman3 };
