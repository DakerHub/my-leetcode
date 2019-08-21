const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
};
const combin = function(chars1, chars2) {
  const chars3 = [];
  for (let i = 0; i < chars1.length; i++) {
    const char1 = chars1[i];
    for (let j = 0; j < chars2.length; j++) {
      const char2 = chars2[j];
      chars3.push(char1 + char2);
    }
  }

  return chars3;
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  if (digits.length === 1) {
    return map[digits].split("");
  }
  const prevChars = digits.substring(0, digits.length - 1);
  const last = digits[digits.length - 1];

  return combin(letterCombinations(prevChars), letterCombinations(last));
};

module.exports = {
  letterCombinations
};
