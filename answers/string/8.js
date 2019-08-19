/**
 * @description
 * 字符串转整数
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const range = [-(2 ** 31), 2 ** 31 - 1];

  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numsWithSign = ["+", "-"].concat(nums);
  let numStr = "";
  let prev = undefined;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ([" ", undefined].includes(prev)) {
      if (numsWithSign.includes(char)) {
        prev = char;
        numStr += char;
      } else if (char !== " ") {
        break;
      }
      continue;
    }

    if (numsWithSign.includes(prev) && nums.includes(char)) {
      numStr += char;
      prev = char;
      continue;
    }

    break;
  }

  numStr = ["+", "-"].includes(numStr) ? "0" : numStr;
  const n = Number.parseInt(numStr || "0");
  return n > range[1] ? range[1] : n < range[0] ? range[0] : n;
};

/**
 * @description
 * 字符串转整数 parseInt
 * @param {string} str
 * @return {number}
 */
var myAtoi2 = function(str) {
  const range = [-(2 ** 31), 2 ** 31 - 1];
  const n = Number.parseInt(str);
  if (isNaN(n)) {
    return 0;
  }

  return n > range[1] ? range[1] : n < range[0] ? range[0] : n;
};

/**
 * @description
 * 字符串转整数 parseInt
 * @param {string} str
 * @return {number}
 */
var myAtoi3 = function(str) {
  const range = [-(2 ** 31), 2 ** 31 - 1];
  const strArr = str.trim().match(/^(\+|\-)?\d+/);

  const n = Number.parseInt(strArr ? strArr[0] : 0);

  return n > range[1] ? range[1] : n < range[0] ? range[0] : n;
};

module.exports = {
  myAtoi,
  myAtoi2,
  myAtoi3
};
