/*
20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.length) {
      const peek = stack[stack.length - 1];
      if (['()', '[]', '{}'].includes(peek + char)) {
        stack.pop();
        continue;
      }
    }

    if (!stack.length && [')', '}', ']'].includes(char)) {
      return false;
    }

    stack.push(char);
  }

  return stack.length === 0;
};

module.exports = isValid;
