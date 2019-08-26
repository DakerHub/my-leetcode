/**
 * 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const pair = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in pair) {
      stack.push(char);
    } else if (pair[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = {
  isValid
};
